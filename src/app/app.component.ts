import { Component } from '@angular/core';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {GoogleService} from "../services/google-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Festival planner';
  
  constructor(private authService: SocialAuthService, private googleService: GoogleService) { }
  
  ngOnInit() {
    this.googleService.initLogin();
  }
}