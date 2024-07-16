import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NorthIndianMenuComponent } from './menu/north-indian-menu/north-indian-menu.component';
import { PunjabiMenuComponent } from './menu/punjabi-menu/punjabi-menu.component';
import { BeveragesMenuComponent } from './menu/beverages-menu/beverages-menu.component';
import { DessertMenuComponent } from './menu/dessert-menu/dessert-menu.component';
import { SorthIndianMenuComponent } from './menu/sorth-indian-menu/sorth-indian-menu.component';
import { CARTComponent } from './cart/cart.component';
import { PayNowComponent } from './pay-now/pay-now.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  { path: 'login', component: LoginComponent ,},
  {path:'signUp',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'north-indian-menu',component:NorthIndianMenuComponent},
  {path:'south-indian-menu',component:SorthIndianMenuComponent},
  {path:'punjabi-menu',component:PunjabiMenuComponent},
  {path:'Beverages-menu',component:BeveragesMenuComponent},
  {path:'dessert-menu',component:DessertMenuComponent},
  {path:'add-to-cart',component:CARTComponent},
  {path:'Pay-Now',component:PayNowComponent},
  {path:'Address-Details',component:AddressFormComponent},
  {path:'dashboard',component:DashboardComponent},
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
