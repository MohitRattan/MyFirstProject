import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  isLoggedIn:boolean=false;

  constructor() {}


}




// title = 'RattanKitchen';
//   buttonType = "buy";
//   isCustomsize = 250;
//   buttonHeight = 50;
//   isTop = window === window.top;

//   paymentRequest = {
//     apiVersion: 2,
//     apiVersionMinor: 0,
//     allowPaymentMethods: [
//       {
//         type: "CARD",
//         parameters: {
//           allowedPaymentMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//           allowCardNetworks: ["AMEX", "VISA", "MASTERCARD"],
//         },
//         tokenizationSpecification: {
//           type: "PAYMENT_GATEWAY",
//           parameters: {
//             gateway: "example",
//             gatewayMrchant: "exampleGatewayMerchantId"
//           }
//         }
//       }
//     ],
//     merchantInfo: {
//       merchantId: "12345678901234567890",
//       merchantName: "demo Merchant"
//     },
//     transactionInfo: {
//       totalPriceStatus: "FINAL",
//       totalPriceLabel: "Total",
//       totalPrice: "100000.00",
//       currencyCode: "INR",
//       countryCode: "IN"
//     }
//   };
//   OnLoadPaymentData(event: any):void {
//     console.log("Load Payment", event.dtail)
//   }
  
