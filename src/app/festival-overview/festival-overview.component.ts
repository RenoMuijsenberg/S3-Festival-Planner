import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {environment} from "../../environments/environment";

@Component({
  selector: 'festival-overview',
  templateUrl: './festival-overview.component.html',
  styleUrls: ['./festival-overview.component.css']
})
export class FestivalOverviewComponent {
  constructor(private http: HttpClient) {}
  
  festivals: any;

  getFestivals() {
    this.festivals = this.http.get(environment.baseUrl + "api/festival/festivals")
  }

  ngOnInit() {
    this.getFestivals();
  }
}
