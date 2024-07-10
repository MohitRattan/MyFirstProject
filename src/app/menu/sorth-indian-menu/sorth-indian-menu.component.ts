import { Component } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { SouthIndianMenuService } from 'src/app/Service/south-indian-menu.service';

@Component({
  selector: 'app-sorth-indian-menu',
  templateUrl: './sorth-indian-menu.component.html',
  styleUrls: ['./sorth-indian-menu.component.css']
})
export class SorthIndianMenuComponent {
  public SouthIndianDishes: any[] = [];
  public loading: boolean = true;
  public errorMessage: string | null = null;

  constructor(private southIndianDishService: SouthIndianMenuService, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchDishes();
  }

  fetchDishes(): void {
    this.southIndianDishService.getDishes().subscribe(
      (res: any) => {
        this.SouthIndianDishes = res.dishes || [];
        this.SouthIndianDishes.forEach((dish: any) => {
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
