import { Component } from '@angular/core';
import { BeveragesService } from 'src/app/Service/beverages.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-beverages-menu',
  templateUrl: './beverages-menu.component.html',
  styleUrls: ['./beverages-menu.component.css']
})
export class BeveragesMenuComponent {
  public Beverages: any[] = [];
  public loading: boolean = true;
  public errorMessage: string | null = null;

  constructor(private BeveragesService: BeveragesService, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchDishes();
  }

  fetchDishes(): void {
    this.BeveragesService.getDishes().subscribe(
      (res: any) => {
        this.Beverages = res.dishes || [];
        this.Beverages.forEach((dish: any) => {
          dish.quantity = 1;
          dish.total = dish.price * dish.quantity;
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
