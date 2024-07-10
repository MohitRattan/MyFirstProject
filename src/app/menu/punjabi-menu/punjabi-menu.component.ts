import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { PunjabiMenuService } from 'src/app/Service/punjabi-menu.service';

@Component({
  selector: 'app-punjabi-menu',
  templateUrl: './punjabi-menu.component.html',
  styleUrls: ['./punjabi-menu.component.css']
})
export class PunjabiMenuComponent implements OnInit {
  public PunjabiMenuDish: any[] = [];
  public loading: boolean = true;
  public errorMessage: string | null = null;
  constructor(private PunjabiDishService: PunjabiMenuService, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchDishes();
  }

  fetchDishes(): void {
    this.PunjabiDishService.getDishes().subscribe(
      (res: any) => {
        this.PunjabiMenuDish = res.dishes || [];
        this.PunjabiMenuDish.forEach((dish: any) => {
          dish.quantity = 1;
          dish.total = dish.price + dish.quantity;

        });
        this.loading = false;
      },
      (error: any) => {
        this.errorMessage = 'Failed to load dishes. Please try again later.';
        this.loading = false;
      }
    );
    
  }
  addToCart(dish: any): void {
    this.cartService.addtocart(dish);
  }
}
