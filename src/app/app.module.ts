import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes,RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const appRoutes:Routes = [
  {path:'',  component: PropertyListComponent},
  {path:'dashboard', component: PropertyListComponent},
  {path:'rent-property', component: PropertyListComponent},
  {path:'property-detail/:id', component: PropertyDetailComponent},
  {path:'user/register', component: UserRegisterComponent},
  {path:'user/login', component: UserLoginComponent},
  {path:'add-property', component: AddPropertyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
     NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
