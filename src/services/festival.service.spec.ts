import { FestivalService } from './festival.service';
import {HttpClient} from "@angular/common/http";
import {Festival} from "../interfaces/festival.interface";
import {of} from "rxjs";
import {FestivalRepository} from "../repository/festival.repository";

describe('FestivalService', () => {
  let festivalRepository: jasmine.SpyObj<FestivalRepository>
  let festivalService: FestivalService;

  beforeEach(() => {
    festivalRepository = jasmine.createSpyObj<FestivalRepository>(["getFestivals", "getSpecificFestival"]);
    festivalService = new FestivalService(festivalRepository);
  });

  it('should return expected festivals', (done: DoneFn) => {
    const expectedFestivals: Festival[] = [
      {id: "id1", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0},
      {id: "id1", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0}    ]

    festivalRepository.getFestivals.and.returnValue(of(expectedFestivals))

    festivalService.getFestivals().subscribe({
      next: festival => {
        expect(festival)
            .withContext('expected festivals')
            .toEqual(expectedFestivals);
        done();
      },
      error: done.fail
    });
  });

  it('should return expected festival', (done: DoneFn) => {
    const expectedFestivals: Festival = {id: "id1", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0};

    festivalRepository.getSpecificFestival.and.returnValue(of(expectedFestivals))

    festivalService.getSpecificFestival("Rebellion").subscribe({
      next: festival => {
        expect(festival)
            .withContext('expected festival')
            .toEqual(expectedFestivals);
        done();
      },
      error: done.fail
    });
  });

  it('should be created', () => {
    expect(festivalService).toBeTruthy();
  });
});
