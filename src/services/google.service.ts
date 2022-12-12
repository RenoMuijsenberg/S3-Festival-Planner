import { Injectable } from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {GoogleServiceDateHelperService} from "../helpers/google-service-date-helper.service";
import {GoogleRepository} from "../repository/google.repository";

@Injectable({providedIn: 'root'})
export class GoogleService {
  constructor(private authService: SocialAuthService, private dateHelper: GoogleServiceDateHelperService, private repository: GoogleRepository) { }
  
  private _accessToken: string = "";
  private _user: SocialUser = new SocialUser();

  initLogin(): void {
    this.authService.authState.subscribe({
      next: user => {
        this._user = user;
        this.getAccessToken();
      }
    });
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      this._accessToken = accessToken;
    });
  }
  
  addToCalendar(festivalName: string, festivalDate: string, festivalTime: string): void {
    if (!this._accessToken) {
      return alert("Please login first!");
    }
    
    const dateIsInPast = this.dateHelper.checkIfInPast(new Date(festivalDate))
    if (dateIsInPast) {
      return alert("Date is in the past!");
    }
    
    const dates = this.dateHelper.formatDateForCalendar(festivalDate, festivalTime);

    this.repository.addToCalendar(dates, festivalName, this._accessToken)
  }
}
