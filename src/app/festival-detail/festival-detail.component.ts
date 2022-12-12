import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FestivalService} from "../../services/festival.service";
import {GoogleService} from "../../services/google.service";
import {Festival} from "../../interfaces/festival.interface";


@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.component.html',  
})
export class FestivalDetailComponent implements OnInit {
  constructor(private festivalService: FestivalService, private route: ActivatedRoute, private googleService: GoogleService) {}
  
  festivalName: string | null = this.route.snapshot.paramMap.get("name");
  festival: any;
  dates: string[] = new Array<string>;
  
  splitDates() {
    if (this.festival.festivalDate.includes("-")) {
      const startDate = this.festival.festivalDate. split(" - ")[0];
      const endDate = this.festival.festivalDate. split(" - ")[1];
      this.getDaysArray(startDate, endDate)
    }
    else {
      this.dates.push(this.festival.festivalDate);
    }
  }

  getDaysArray(start: string, end: string) {
    const dates: string[] = [];
    let newStart = new Date(start);
    newStart.setFullYear(this.getYear(start));
    
    let newEnd = new Date(end);
    newEnd.setFullYear(this.getYear(end));
    
    const diff = Math.ceil((newEnd.getTime() - newStart.getTime()) / (1000 * 3600 * 24));
    
    for (let i = 0; i <= diff; i++) {
      dates.push(newStart.toLocaleString('default', { day: '2-digit', month: 'short' }) + " " + newStart.getFullYear())
      newStart.setDate(newStart.getDate() + 1)
    }
    
    console.log(dates)
    
    this.dates = dates;
  };
  
  getYear(date: string): number {
    const today = new Date();
    const thisYear = today.getFullYear();
    const currentDate = new Date(date);
    currentDate.setFullYear(thisYear)
    
    today.setHours(0, 0, 0, 0);
    
    if (currentDate < today) {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getFullYear();
    }

    return thisYear;
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
