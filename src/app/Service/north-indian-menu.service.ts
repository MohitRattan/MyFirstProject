import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NorthIndianMenuService {
  private jsonURL = 'assets/NorthIndianDishes.json';

  constructor(private http: HttpClient) {}

  getDishes(): Observable<any> {
    return this.http.get<any>(this.jsonURL).pipe(
      map((res: any) => res)
    );
  }
}
