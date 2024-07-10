import { Component } from '@angular/core';
import { RouteService } from '../route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public routeService: RouteService,private router:Router) {}
  islogin() :boolean{
    return this.router.url==='/login';

  }
}
