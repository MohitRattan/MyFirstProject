// import { Component, OnInit } from '@angular/core';
// import { RouteService } from '../route.service';
// import { CartService } from '../Service/cart.service';
// import { Route, Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-navbaar',
//   templateUrl: './navbaar.component.html',
//   styleUrls: ['./navbaar.component.css']
// })
// export class NavbaarComponent implements OnInit {
//   isLoggedIn!: boolean 

//   public TotalItem: number = 0;
//   authService!: any;

//   constructor(public routeService: RouteService, private cartService: CartService, private router: Router, public authservice: AuthService) { }

//   ngOnInit(): void {
//     this.cartService.getOrder().subscribe(res => {
//       this.TotalItem = res.length;
//     });
//   }

//   isDropdownOpen: boolean = false;
//   toggleDropdown() {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   isDropdownOpen1: boolean = false;
//   toggleDropdown1() {
//     this.isDropdownOpen1 = !this.isDropdownOpen1;
//   }
//   inLoginPage(): boolean {
//     return this.router.url === '/login';
//   }
//   insignup(): boolean {
//     return this.router.url === '/signup';
//   }
//   onLogin() {
//     debugger
//     this.authservice.login();
//     this.router.navigate(['/home'])

//   }
// }








import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';
import { CartService } from '../Service/cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbaar',
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.css']
})
export class NavbaarComponent implements OnInit {
  isLoggedIn: boolean | undefined;

  public TotalItem: number = 0;

  constructor(public routeService: RouteService, private cartService: CartService, private router: Router, public authservice: AuthService) { }

  ngOnInit(): void {
    this.cartService.getOrder().subscribe(res => {
      this.TotalItem = res.length;
    });

    // Initialize isLoggedIn
    this.isLoggedIn = this.authservice.isLoggedIn();
  }

  isDropdownOpen: boolean = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isDropdownOpen1: boolean = false;
  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }

  inLoginPage(): boolean {
    return this.router.url === '/login';
  }

  insignup(): boolean {
    return this.router.url === '/signup';
  }

  onLogin() {
    this.authservice.login();
    this.router.navigate(['home']);
  }
  logout(){
    this.authservice.logout();
    this.router.navigate(['login']);
  }
}
