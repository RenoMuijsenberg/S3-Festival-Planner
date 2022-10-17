import {Component, OnInit} from '@angular/core';
import {FestivalService} from "../../services/festival.service";



@Component({
  selector: 'app-festival-overview',
  templateUrl: './festival-overview.component.html',
  styleUrls: ['./festival-overview.component.css']
})
export class FestivalOverviewComponent implements OnInit {
  constructor(private service: FestivalService) {}
  
  festivals: any;

  getFestivals() {
    this.festivals = this.service.getFestivals();
  }

  ngOnInit() {
    this.getFestivals();
  }
}
