import { Component } from '@angular/core';
import {FestivalService} from "../../services/festival.service";


@Component({
  selector: 'festival-overview',
  templateUrl: './festival-overview.component.html',
  styleUrls: ['./festival-overview.component.css']
})
export class FestivalOverviewComponent {
  constructor(private service: FestivalService) {}
  
  festivals: any;

  getFestivals() {
    this.festivals = this.service.GetFestivals()
  }

  ngOnInit() {
    this.getFestivals();
  }
}
