import { FestivalOverviewComponent } from './festival-overview.component';
import {FestivalService} from "../../services/festival.service";
import {of} from "rxjs";
import {Festival} from "../../interfaces/festival.interface.";

describe('FestivalOverviewComponent', () => {
  let component: FestivalOverviewComponent;

  beforeEach(async () => {
    const expectedFestivals: Festival[] = [
      {Id: "id1", FestivalName: "Rebellion", FestivalTimeFrame: "17.00-00.00", FestivalDay: "Saterday", FestivalDate: "20-10-2020", FestivalAge: "17+", FestivalPrice: "20.00", FestivalLocation: "Aarbeistraat", FestivalOrder: 0},
      {Id: "id2", FestivalName: "Rebellion", FestivalTimeFrame: "17.00-00.00", FestivalDay: "Saterday", FestivalDate: "20-10-2020", FestivalAge: "17+", FestivalPrice: "20.00", FestivalLocation: "Aarbeistraat", FestivalOrder: 0}
    ]
    
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
});
