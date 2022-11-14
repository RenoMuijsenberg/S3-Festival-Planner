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
    if (!this._accessToken) {
      return alert("Please login first!");
    }
    
    const dateIsInPast = this.checkIfInPast(new Date(festivalDate))
    
    if (!dateIsInPast) {
      return alert("Date is in the past!");
    }
    
    const dates = this.formatDateForCalendar(festivalDate, festivalTime);
    
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
  
  protected formatDateForCalendar(festivalDate: string, festivalTime: string): string[] {
    let year = festivalDate.split(" ")[2];
    const month = this.getMonthFromString(festivalDate.split(" ")[1]);
    const day = festivalDate.split(" ")[0];
    let date = year + "-" + month + "-" + day;
    const startTime = festivalTime.split(" - ")[0];
    const endTime = festivalTime.split(" - ")[1];

    if (year == undefined) {
      date = this.getNextYear(date) + "-" + month + "-" + day;
    }

    const startDate = date + "T" + startTime + ":00+01:00";
    let endDate = date + "T" + endTime + ":00+01:00";

    if (endTime.charAt(0) == "0") {
      let newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      endDate = newDate.toISOString().split("T")[0] + "T" + endTime + ":00+01:00";
    }
    
    return [startDate, endDate];
  }
  
  protected checkIfInPast(date: Date): boolean {
    return (date < new Date());
  }
  
  protected getNextYear(date: string): string {
    const today = new Date();
    let year = "";
    today.setHours(0, 0, 0, 0);
    
    if (new Date(date) < today) {
      year = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getFullYear().toString()
    }
    
    return year;
  }
  
  protected getMonthFromString(mon: string): string{
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
