import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.component.html',
  styleUrls: ['./festival-detail.component.css']
})
export class FestivalDetailComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  festivalName: any;
  festival: any;

  getFestival() {
    this.festivalName = this.route.snapshot.paramMap.get("name");
    this.festival = this.http.get(environment.baseUrl + "api/festival/festivals/" + this.festivalName)
    this.festival.subscribe((x: any) => this.festival = x)
  }

  ngOnInit() {
    this.getFestival();
  }
}
