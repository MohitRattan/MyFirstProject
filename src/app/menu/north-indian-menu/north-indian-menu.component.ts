
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { NorthIndianMenuService } from 'src/app/Service/north-indian-menu.service';

@Component({
  selector: 'app-north-indian-menu',
  templateUrl: './north-indian-menu.component.html',
  styleUrls: ['./north-indian-menu.component.css']
})
export class NorthIndianMenuComponent implements OnInit {
  public NorthIndianDishes: any[] = [];
  public loading: boolean = true;
  public errorMessage: string | null = null;

  constructor(private northIndianDishService: NorthIndianMenuService, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchDishes();
  }

  fetchDishes(): void {
    this.northIndianDishService.getDishes().subscribe(
      (res: any) => {
        this.NorthIndianDishes = res.dishes || [];
        this.NorthIndianDishes.forEach((dish: any) => {
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
