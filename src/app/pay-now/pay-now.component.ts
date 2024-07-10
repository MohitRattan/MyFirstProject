import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-now',
  templateUrl: './pay-now.component.html',
  styleUrls: ['./pay-now.component.css']
})
export class PayNowComponent {
  selectedPaymentMethod!: string;
  isCardVisible: boolean = false;

  toggleCardForm() {
    if (this.selectedPaymentMethod === 'GPAY' || this.selectedPaymentMethod === 'PAYPAL' || this.selectedPaymentMethod === 'AMAZON PAY') {
      this.isCardVisible = true;
    } else {
      this.isCardVisible = false;
    }
  }

  onSubmit(cardForm: NgForm) {

    alert("Order Placed Succesfully");
    console.log(cardForm.value);
  }
}

