import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  localStorageData: { key: string, value: any, type: string }[] = [];

  constructor(private localStorageService: ReservationService) { }

  ngOnInit(): void {
    this.loadLocalStorageData();
  }

  // Load data from local storage
  loadLocalStorageData(): void {
    this.localStorageData = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = this.localStorageService.getItem(key);
        const type = typeof value;
        this.localStorageData.push({ key, value, type });
      }
    }
  }

}
