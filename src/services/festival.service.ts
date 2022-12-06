import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Festival} from "../interfaces/festival.interface";
import {environment} from "../environments/environment";

@Injectable({providedIn: 'root'})
export class FestivalService {
  constructor(private http: HttpClient) {}
  
  getFestivals(): Observable<Festival[]> {
    return this.http.get<Festival[]>(environment.baseUrl + "api/festival/festivals");
  }
  
  getSpecificFestival(festivalName: string| null): Observable<Festival> {
    return this.http.get<Festival>(environment.baseUrl + "api/festival/festivals/" + festivalName);
  }
}
