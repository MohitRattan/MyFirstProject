import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaarComponent } from './navbaar/navbaar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NorthIndianMenuComponent } from './menu/north-indian-menu/north-indian-menu.component';
import { SorthIndianMenuComponent } from './menu/sorth-indian-menu/sorth-indian-menu.component';
import { PunjabiMenuComponent } from './menu/punjabi-menu/punjabi-menu.component';
import { DessertMenuComponent } from './menu/dessert-menu/dessert-menu.component';
import { BeveragesMenuComponent } from './menu/beverages-menu/beverages-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CARTComponent } from './cart/cart.component';
import { PayNowComponent } from './pay-now/pay-now.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
  
@NgModule({
  declarations: [
    AppComponent,
    NavbaarComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    NorthIndianMenuComponent,
    SorthIndianMenuComponent,
    PunjabiMenuComponent,
    DessertMenuComponent,
    BeveragesMenuComponent,
    CARTComponent,
    PayNowComponent,
    AddressFormComponent,
    DashboardComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
