import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FestivalService} from "../../services/festival.service";
import {GoogleService} from "../../services/google-service.service";
import {Festival} from "../../interfaces/festival.interface";


@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.component.html',  
  styleUrls: ['./festival-detail.component.css']
})
export class FestivalDetailComponent implements OnInit {
  constructor(private festivalService: FestivalService, private route: ActivatedRoute, private googleService: GoogleService) {}
  
  festivalName: string | null = this.route.snapshot.paramMap.get("name");
  festival: any;
  dates: string[] = new Array<string>;
  
  splitDates() {
    if (this.festival.festivalDate.includes("-")) {
      this.dates.push(this.festival.festivalDate. split(" - ")[0]);
      this.dates.push(this.festival.festivalDate. split(" - ")[1]);
    }
    else {
      this.dates.push(this.festival.festivalDate);
    }
  }

  getFestival() {
    this.festival = this.festivalService.getSpecificFestival(this.festivalName);
    this.festival.subscribe((x: Festival) => {
      this.festival = x;
      this.splitDates();
    });
  }
  
  addToCalendar(date: string) {
    this.googleService.addToCalendar(this.festival.festivalName, date, this.festival.festivalTimeFrame);
  }

  ngOnInit() {
    this.getFestival();
  }
}
