import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    // Example: Check if user is logged in (e.g., check token existence in local storage)
    return !!localStorage.getItem('token');
  }
}
