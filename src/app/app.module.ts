import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FestivalOverviewComponent} from './festival-overview/festival-overview.component';
import {FestivalComponent} from './festival/festival.component';
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from './not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {FestivalDetailComponent} from './festival-detail/festival-detail.component';
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "@abacritt/angularx-social-login";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FestivalOverviewComponent,
        FestivalComponent,
        NotFoundComponent,
        FestivalDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: "", component: FestivalOverviewComponent},
            {path: "festival/:name", component: FestivalDetailComponent},
            {path: "**", component: NotFoundComponent}
        ]),
        SocialLoginModule,
    ],
    providers: [
        {provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [{id: GoogleLoginProvider.PROVIDER_ID, provider: new GoogleLoginProvider('763111709962-r92u8nhe0inaujle0do74kl5c0hemno0.apps.googleusercontent.com')}],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
