import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SouthIndianMenuService {
  private jsonURL = 'assets/SouthIndianDishes.json';

  constructor(private http: HttpClient) {}

  getDishes(): Observable<any> {
    return this.http.get<any>(this.jsonURL).pipe(
      map((res: any) => res)
    );
  }}
