import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http : HttpClient) {}

  apiUrl = 'http://localhost:3000/category';

  getCategories(): Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  createCategory(data:any):Observable<any>{

    return this._http.post(`${this.apiUrl}`, data)
  }

}
