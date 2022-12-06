import { GoogleService } from './google-service.service';
import {HttpClient} from "@angular/common/http";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {GoogleServiceDateHelperService} from "../helpers/google-service-date-helper.service";

describe('GoogleService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let authService: jasmine.SpyObj<SocialAuthService>;
  let dateHelper: jasmine.SpyObj<GoogleServiceDateHelperService>
  let service: GoogleService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["post"]);
    service = new GoogleService(authService, httpClientSpy, dateHelper)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
