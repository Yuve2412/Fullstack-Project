import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { FeedBackFormComponent } from './feed-back-form/feed-back-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LogoutComponent } from './logout/logout.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBusDetailsComponent,
    BusInfoComponent,
    BusDetailsListComponent,
    UpdateBusDetailsComponent,
    RegistrationFormComponent,
    LogInPageComponent,
    FeedBackFormComponent,
    HomePageComponent,
    ProfileCardComponent,
    LogoutComponent,
    BusSeatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }