import { Component } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { DessertService } from 'src/app/Service/dessert.service';

@Component({
  selector: 'app-dessert-menu',
  templateUrl: './dessert-menu.component.html',
  styleUrls: ['./dessert-menu.component.css']
})
export class DessertMenuComponent {
  public DessertDishes: any[] = [];
  public loading: boolean = true;
  public errorMessage: string | null = null;

  constructor(private DessertDishService: DessertService, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchDishes();
  }

  fetchDishes(): void {
    this.DessertDishService.getDishes().subscribe(
      (res: any) => {
        this.DessertDishes = res.dishes || [];
        this.DessertDishes.forEach((dish: any) => {
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
