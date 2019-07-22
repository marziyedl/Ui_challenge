import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetDropDownDataService {

  constructor(private http: HttpClient) { }
get(url :string): Observable<City> {
    return this.http.get<City>(url);
  }
}
