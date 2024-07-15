import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private apiurl = 'https://localhost:7083/api/SignUp'

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.apiurl}/login`, { email, password })
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem(this.tokenKey, response.token);
            return true;
          }
          return false;
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
