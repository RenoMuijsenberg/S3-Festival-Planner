import { TestBed } from '@angular/core/testing';

import { GoogleServiceDateHelperService } from './google-service-date-helper.service';

fdescribe('GoogleServiceDateHelperService', () => {
  let service: GoogleServiceDateHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleServiceDateHelperService);
  });

  //Test if component can be created
  //Will return true
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Test if given date is not in the past
  //Will return true
  it('should check if is in past (returns false)', function () {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    const result: boolean = service.checkIfInPast(tomorrow)
    
    expect(result).toBe(false)
  });

  //Test if given date is in the past
  //Will return false
  it('should check if is in past (returns true)', function () {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    const result: boolean = service.checkIfInPast(yesterday)

    expect(result).toBe(true)
  });

  //Test if given textual month gives back correct number of month
  //Will be equal
  it('should give correct number of month', function () {
    const date = new Date().toLocaleDateString("default", {
      month: "short"
    });
    const answer = (new Date().getMonth()+1).toString();
    const result: string = service.getMonthFromString(date);
    
    expect(result).toEqual(answer)
  });
});
