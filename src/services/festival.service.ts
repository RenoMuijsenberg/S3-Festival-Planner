import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Festival} from "../interfaces/festival.interface.";
import {environment} from "../environments/environment";

@Injectable({providedIn: 'root'})
export class FestivalService {
  constructor(private http: HttpClient) {}
  
  GetFestivals(): Observable<Festival[]> {
    return this.http.get<Festival[]>(environment.baseUrl + "api/festival/festivals");
  }
  
  GetSpecificFestival(festivalName: string): Observable<Festival> {
    return this.http.get<Festival>(environment.baseUrl + "api/festival/festivals/" + festivalName);
  }
}
