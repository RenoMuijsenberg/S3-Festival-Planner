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
    component.festival = {id: "id1", festivalName: "Rebellion", festivalTimeFrame: "17.00-00.00", festivalDay: "Saterday", festivalDate: "20-10-2020", festivalAge: "17+", festivalPrice: "20.00", festivalLocation: "Aarbeistraat", festivalOrder: 0};
    expect(component.festival).not.toBeNull();
  });
});
