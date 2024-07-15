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
  {path:"",redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent ,},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'aboutus',component:AboutusComponent,canActivate:[AuthGuard]},
  {path:'north-indian-menu',component:NorthIndianMenuComponent,canActivate:[AuthGuard]},
  {path:'south-indian-menu',component:SorthIndianMenuComponent,canActivate:[AuthGuard]},
  {path:'punjabi-menu',component:PunjabiMenuComponent,canActivate:[AuthGuard]},
  {path:'Beverages-menu',component:BeveragesMenuComponent,canActivate:[AuthGuard]},
  {path:'dessert-menu',component:DessertMenuComponent,canActivate:[AuthGuard]},
  {path:'add-to-cart',component:CARTComponent,canActivate:[AuthGuard]},
  {path:'Pay-Now',component:PayNowComponent,canActivate:[AuthGuard]},
  {path:'Address-Details',component:AddressFormComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
