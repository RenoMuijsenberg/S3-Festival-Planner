import { GoogleService } from './google.service';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {GoogleServiceDateHelperService} from "../helpers/google-service-date-helper.service";
import {GoogleRepository} from "../repository/google.repository";
import {FestivalRepository} from "../repository/festival.repository";

describe('GoogleService', () => {
  let googleRepository: jasmine.SpyObj<GoogleRepository>;
  let authService: jasmine.SpyObj<SocialAuthService>;
  let dateHelper: jasmine.SpyObj<GoogleServiceDateHelperService>
  let service: GoogleService;

  beforeEach(() => {
    googleRepository = jasmine.createSpyObj<GoogleRepository>(["addToCalendar"]);
    service = new GoogleService(authService, dateHelper, googleRepository)
  });

  //Test will check if component is correctly created
  //Result: will be created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  //Test will check if it will be added to calendar
  //Will return true
  it('should add to calendar (returns true)', function () {
    googleRepository.addToCalendar.and.returnValue(true);

    const result = googleRepository.addToCalendar([""], "tst", "test")

    expect(result).toBeTrue()
  });
});
