import { FestivalOverviewComponent } from './festival-overview.component';
import {FestivalService} from "../../services/festival.service";
import {of} from "rxjs";
import {Festival} from "../../interfaces/festival.interface";

describe('FestivalOverviewComponent', () => {
  let component: FestivalOverviewComponent;

  beforeEach(async () => {
    const expectedFestivals: Festival[] = [
      {id: "id1", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0},
      {id: "id2", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0},    ]
    
    const festivalServiceSpy = jasmine.createSpyObj<FestivalService>(['getFestivals'])
    festivalServiceSpy.getFestivals.and.returnValue(of(expectedFestivals))
    
    component = new FestivalOverviewComponent(festivalServiceSpy)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have festival data',  () => {
    expect(component.festivals).not.toBeNull()
  });

  it('should get festival data from called function',  () => {
    const result = component.getFestivals();
    expect(result).not.toBeNull();
  });
});
