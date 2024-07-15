// signup.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tata{
  id:number;
  username : string;
  email : string;
  password : string;
  confirmpassword : string ; 
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'https://localhost:7083/api/SignUp'; 
   // Update with your backend API URL

  constructor(private http: HttpClient) {}
     
  postItem(tata : Tata): Observable<Tata>
  {
    return this.http.post<Tata>(`${this.apiUrl}/Add`, tata);
  }

loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }
 
  } 

