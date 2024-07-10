import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CARTComponent implements OnInit {
  public dishes: any[] = [];
  public grandTotal!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getOrder().subscribe(res => {
      this.dishes = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any): void {
    this.cartService.removecartItem(item);
    this.updateTotal();
  }

  emptyCart(): void {
    this.cartService.removeAllcat();
    this.updateTotal();
  }

  private updateTotal(): void {
    this.grandTotal = this.cartService.getTotalPrice();
  }
  payNow(): void {
    
    alert(`Proceeding to payment for the amount of ₹${this.grandTotal}`);
    
    this.emptyCart();
    this.updateTotal();

  }
}
