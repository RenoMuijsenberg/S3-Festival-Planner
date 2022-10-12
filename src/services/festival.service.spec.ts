import { FestivalService } from './festival.service';
import {HttpClient} from "@angular/common/http";
import {Festival} from "../interfaces/festival.interface";
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
      {id: "id1", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0},
      {id: "id1", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0}    ]

    httpClientSpy.get.and.returnValue(of(expectedFestivals));

    festivalService.getFestivals().subscribe({
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
    const expectedFestivals: Festival = {id: "id1", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0};

    httpClientSpy.get.and.returnValue(of(expectedFestivals));

    festivalService.getSpecificFestival("Rebellion").subscribe({
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
