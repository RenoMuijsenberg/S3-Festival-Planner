import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalComponent } from './festival.component';

describe('FestivalComponent', () => {
  let component: FestivalComponent;
  let fixture: ComponentFixture<FestivalComponent>;

  beforeEach(async () => {
    component = new FestivalComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have festival data',  () => {
    component.festival = {Id: "id1", FestivalName: "Rebellion", FestivalTimeFrame: "17.00-00.00", FestivalDay: "Saterday", FestivalDate: "20-10-2020", FestivalAge: "17+", FestivalPrice: "20.00", FestivalLocation: "Aarbeistraat", FestivalOrder: 0};
    expect(component.festival).not.toBeNull();
  });
});
