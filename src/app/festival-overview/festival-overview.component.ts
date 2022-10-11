import {Component, OnInit} from '@angular/core';
import {FestivalService} from "../../services/festival.service";
import {Festival} from "../../interfaces/festival.interface.";
import {Observable} from "rxjs";


@Component({
  selector: 'festival-overview',
  templateUrl: './festival-overview.component.html',
  styleUrls: ['./festival-overview.component.css']
})
export class FestivalOverviewComponent {
  constructor(private service: FestivalService) {}
  
  festivals!: Observable<Festival[]>;

  getFestivals() {
    this.festivals = this.service.getFestivals();
  }

  ngOnInit() {
    this.getFestivals();
  }
}
