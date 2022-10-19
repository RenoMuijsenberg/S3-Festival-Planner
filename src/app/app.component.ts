import { Component } from '@angular/core';
import {GoogleInitOptions, GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Festival planner';
  user!: SocialUser;
  private accessToken = "";
  
  constructor(private authService: SocialAuthService, private httpClient: HttpClient) { }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      this.accessToken = accessToken
      
    }).then(() => {
      this.addEventToCalendar();
    });
  }

  addEventToCalendar(): void {
    if (!this.accessToken) return;
    
    const headers = {Authorization: `Bearer ${this.accessToken}`}
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
  
  ngOnInit() {
    this.authService.authState.subscribe({
      next: user => {
        this.user = user;
        this.getAccessToken();
      },
      error: err => console.log(err),
      complete: () => this.addEventToCalendar()
    });
  }
}
