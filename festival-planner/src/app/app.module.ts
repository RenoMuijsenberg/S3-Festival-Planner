import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FestivalOverviewComponent } from './festival-overview/festival-overview.component';
import { FestivalComponent } from './festival/festival.component';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FestivalOverviewComponent,
    FestivalComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: FestivalOverviewComponent},
      {path: "**", component: NotFoundComponent}
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
