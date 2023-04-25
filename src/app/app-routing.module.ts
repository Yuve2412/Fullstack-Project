import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { FeedBackFormComponent } from './feed-back-form/feed-back-form.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  {path:'app-logout',component:LogoutComponent},
  {path:'app-bus-seats/:busId', component:BusSeatsComponent,canActivate:[AuthGaurdService] },
  {path: 'app-profile-card',component:ProfileCardComponent},
  {path: 'app-home-page', component:HomePageComponent},
  {path: 'app-registration-form', component:RegistrationFormComponent},
  {path: 'app-log-in-page', component:LogInPageComponent},
  {path: 'app-contact-us',component:ContactUsComponent},
  {path: 'app-feed-back-form', component:FeedBackFormComponent},
  {path: 'busDetails', component: BusDetailsListComponent,canActivate:[AuthGaurdService]},
  {path: 'create-bus-details', component: CreateBusDetailsComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'app-home-page', pathMatch: 'full'},
  {path: 'updateBusDetails/:busId', component: UpdateBusDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'busDetails/:busId', component:  BusInfoComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }