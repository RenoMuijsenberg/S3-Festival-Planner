import { Injectable } from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private authService: SocialAuthService, private httpClient: HttpClient) { }
  
  private _accessToken: string = "";
  private _user: SocialUser = new SocialUser();

  initLogin(): void {
    this.authService.authState.subscribe({
      next: user => {
        this._user = user;
        localStorage.setItem("user", JSON.stringify(user));
        this.getAccessToken();
      }
    });
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      this._accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
    });
  }
  
  addToCalendar(): void {
    if (!this._accessToken) return

    const headers = {Authorization: `Bearer ${this._accessToken}`}
    const body = {
      "end": {
        "dateTime": "2022-10-20T15:30:00",
        "timeZone": "Europe/Amsterdam"
      },
      "start": {
        "dateTime": "2022-10-20T15:00:00",
        "timeZone": "Europe/Amsterdam"
      },
      "summary": "Rebellion",
      "description": "Test lalalala"
    };

    this.httpClient.post('https://www.googleapis.com/calendar/v3/calendars/primary/events', body,{headers}).subscribe({
      next: () => alert("Successfully added to calendar"),
      error: err => console.log(err)
    });
  }
}
