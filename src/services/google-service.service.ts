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
    if (!this._accessToken) return
    
    const date = festivalDate.split(" ")[2] + "-" + this.getMonthFromString(festivalDate.split(" ")[1]) + "-" + festivalDate.split(" ")[0];
    const startDate = date + "T" +  festivalTime.split(" - ")[0] + ":00+01:00";
    let endDate = date + "T" +  festivalTime.split(" - ")[1] + ":00+01:00";
    
    if (festivalTime.split(" - ")[1].charAt(0) == "0") {
      let newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1)
      endDate = newDate.toISOString().split("T")[0] + "T" + festivalTime.split(" - ")[1] + ":00+01:00";
    }
    
    console.log(startDate)
    console.log(endDate)
        
    const headers = {Authorization: `Bearer ${this._accessToken}`}
    const body = {
      "summary": festivalName,
      "start": {
        "dateTime": startDate,
        "timeZone": "Europe/Amsterdam"
      },
      "end": {
        "dateTime": endDate,
        "timeZone": "Europe/Amsterdam"
      }
    };

    // this.httpClient.post('https://www.googleapis.com/calendar/v3/calendars/primary/events', body,{headers}).subscribe({
    //   next: () => alert("Successfully added to calendar"),
    //   error: err => console.log(err)
    // });
  }

  getMonthFromString(mon: string): string{
    if (mon == "Okt" || mon == "okt") {
      mon = "Oct"
    }
    
    if (mon == "Mei" || mon == "mei") {
      mon = "May"
    }
    
    let date = new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
    return date.toString()
  }
}
