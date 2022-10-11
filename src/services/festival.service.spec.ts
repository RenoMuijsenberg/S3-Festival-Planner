import { TestBed } from '@angular/core/testing';

import { FestivalService } from './festival.service';
import {HttpClient} from "@angular/common/http";
import {Festival} from "../interfaces/festival.interface.";
import {of} from "rxjs";

describe('FestivalService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let festivalService: FestivalService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    festivalService = new FestivalService(httpClientSpy);
  });

  it('should return expected festivals (HttpClient called once)', (done: DoneFn) => {
    const expectedFestivals: Festival[] = [
      {Id: "id1", FestivalName: "Rebellion", FestivalTimeFrame: "17.00-00.00", FestivalDay: "Saterday", FestivalDate: "20-10-2020", FestivalAge: "17+", FestivalPrice: "20.00", FestivalLocation: "Aarbeistraat", FestivalOrder: 0},
      {Id: "id2", FestivalName: "Rebellion", FestivalTimeFrame: "17.00-00.00", FestivalDay: "Saterday", FestivalDate: "20-10-2020", FestivalAge: "17+", FestivalPrice: "20.00", FestivalLocation: "Aarbeistraat", FestivalOrder: 0}
    ]

    httpClientSpy.get.and.returnValue(of(expectedFestivals));

    festivalService.GetFestivals().subscribe({
      next: festival => {
        expect(festival)
            .withContext('expected festivals')
            .toEqual(expectedFestivals);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
        .withContext('one call')
        .toBe(1);
  });

  it('should return expected festival (HttpClient called once)', (done: DoneFn) => {
    const expectedFestivals: Festival = {Id: "id1", FestivalName: "Rebellion", FestivalTimeFrame: "17.00-00.00", FestivalDay: "Saterday", FestivalDate: "20-10-2020", FestivalAge: "17+", FestivalPrice: "20.00", FestivalLocation: "Aarbeistraat", FestivalOrder: 0}

    httpClientSpy.get.and.returnValue(of(expectedFestivals));

    festivalService.GetSpecificFestival("Rebellion").subscribe({
      next: festival => {
        expect(festival)
            .withContext('expected festival')
            .toEqual(expectedFestivals);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
        .withContext('one call')
        .toBe(1);
  });

  it('should be created', () => {
    expect(festivalService).toBeTruthy();
  });
});
