import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FestivalService} from "../../services/festival.service";
import {GoogleService} from "../../services/google-service.service";


@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.component.html',
  styleUrls: ['./festival-detail.component.css']
})
export class FestivalDetailComponent implements OnInit {
  constructor(private festivalService: FestivalService, private route: ActivatedRoute, private googleService: GoogleService) {}
  
  festivalName: any = this.route.snapshot.paramMap.get("name");
  festival: any;

  getFestival() {
    this.festival = this.festivalService.getSpecificFestival(this.festivalName);
    this.festival.subscribe((x: any) => this.festival = x);
  }
  
  addToCalendar() {
    this.googleService.addToCalendar();
  }

  ngOnInit() {
    this.getFestival();
  }
}
