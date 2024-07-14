import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn: boolean | undefined;
  
  constructor(private router:Router,public authservice: AuthService){}
  ngOnInit(): void {
    this.isLoggedIn = this.authservice.isLoggedIn();

  }
  inLoginPage(): boolean {
    return this.router.url === '/login';
  }

  insignup(): boolean {
    return this.router.url === '/signup';
  }
}
