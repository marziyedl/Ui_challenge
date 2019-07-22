import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetAutoCompeleteDataService {

  constructor(private http:  HttpClient) { }
get (url :string): Observable<any> {
    return this.http.get<City>(url)
  }
}
