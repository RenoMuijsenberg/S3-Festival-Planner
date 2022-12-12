import { GoogleService } from './google-service.service';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {GoogleServiceDateHelperService} from "../helpers/google-service-date-helper.service";
import {GoogleRepository} from "../repository/google.repository";

describe('GoogleService', () => {
  let googleRepository: jasmine.SpyObj<GoogleRepository>;
  let authService: jasmine.SpyObj<SocialAuthService>;
  let dateHelper: jasmine.SpyObj<GoogleServiceDateHelperService>
  let service: GoogleService;

  beforeEach(() => {
    service = new GoogleService(authService, dateHelper, googleRepository)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
