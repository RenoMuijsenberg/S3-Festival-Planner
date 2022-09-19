import { Component } from '@angular/core';
import {Festival} from "../../interfaces/festival.interface.";
import {HttpClient } from '@angular/common/http'

@Component({
  selector: 'festival-overview',
  templateUrl: './festival-overview.component.html',
  styleUrls: ['./festival-overview.component.css']
})
export class FestivalOverviewComponent {
  constructor(private http: HttpClient) {}

  readonly ROOT_FESTIVAL_SERVICE_URL = "http://host.docker.internal:5000"

  festivals: any;

  getFestivals() {
    this.festivals = this.http.get(this.ROOT_FESTIVAL_SERVICE_URL + "/api/festival/festivals")
  }

  ngOnInit() {
    this.getFestivals();

    console.log(this.festivals)
  }
}
