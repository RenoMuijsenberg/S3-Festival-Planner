import { Injectable } from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {HttpClient} from "@angular/common/http";
import {GoogleServiceDateHelperService} from "../helpers/google-service-date-helper.service";

@Injectable({providedIn: 'root'})
export class GoogleService {
  constructor(private authService: SocialAuthService, private httpClient: HttpClient, private dateHelper: GoogleServiceDateHelperService) { }
  
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
    const headers = {Authorization: `Bearer ${this._accessToken}`}
    const body = {
      "summary": festivalName,
      "start": {
        "dateTime": dates[0],
        "timeZone": "Europe/Amsterdam"
      },
      "end": {
        "dateTime": dates[1],
        "timeZone": "Europe/Amsterdam"
      }
    };

    this.httpClient.post('https://www.googleapis.com/calendar/v3/calendars/primary/events', body,{headers}).subscribe({
      next: () => alert("Successfully added to calendar"),
      error: err => console.log(err)
    });
  }
}
