import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any[] = [];
  public OrderList = new BehaviorSubject<any[]>([]);

  constructor() { 
    this.loadCart();
  }
  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItemList));
  }
  private loadCart() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItemList = JSON.parse(savedCart);
      this.OrderList.next(this.cartItemList);
    }
  }
  getOrder() {
    return this.OrderList.asObservable();
  }

  SetOrder(order: any) {
    this.cartItemList.push(...order);
    this.OrderList.next(this.cartItemList);
    this.saveCart();
  }

  addtocart(order: any) {
    // debugger;
    const existingOrder = this.cartItemList.find(item => item.id === order.id);
    if (existingOrder) {
      existingOrder.quantity += order.quantity;
      existingOrder.total = existingOrder.price * existingOrder.quantity;
    } else {
      order.total = order.price * order.quantity;
      this.cartItemList.push(order);
    }
    this.OrderList.next(this.cartItemList);
    this.saveCart();
    console.log(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.forEach((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removecartItem(order: any) {
    this.cartItemList = this.cartItemList.filter(item => item.id !== order.id);
    this.OrderList.next(this.cartItemList);
  }

  removeAllcat() {
    this.cartItemList = [];
    this.OrderList.next(this.cartItemList);
  }
}
