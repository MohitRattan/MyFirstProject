import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';
import { CartService } from '../Service/cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbaar',
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.css']
})
export class NavbaarComponent implements OnInit {
  isLoggedIn: boolean = false;

  public TotalItem: number = 0;

  constructor(public routeService: RouteService, private cartService: CartService,private router:Router) {}

  ngOnInit(): void {
    this.cartService.getOrder().subscribe(res => {
      this.TotalItem = res.length;
    });
  }

  isDropdownOpen: boolean = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isDropdownOpen1: boolean = false;
  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
  inLoginPage(): boolean{
    return this.router.url==='/login';
  }
  insignup(): boolean{
    return this.router.url==='/signup';
  }
}
