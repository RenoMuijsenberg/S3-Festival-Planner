import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Festival} from "../interfaces/festival.interface";
import {FestivalRepository} from "../repository/festival.repository";

@Injectable({providedIn: 'root'})
export class FestivalService {
  constructor(private repository: FestivalRepository) {}

  getFestivals(): Observable<Festival[]> {
    return this.repository.getFestivals();
  }
  
  getSpecificFestival(festivalName: string| null): Observable<Festival> {
    return this.repository.getSpecificFestival(festivalName);
  }
}
