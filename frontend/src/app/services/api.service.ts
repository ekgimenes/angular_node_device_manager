import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http'
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

  deleteCategory(id:any):Observable<any>{

    let httpParams = new HttpParams().set('Id', id);
    const httpHeaders= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    let options = { params: httpParams, headers: httpHeaders };
    return this._http.delete(`${this.apiUrl}`, options);
   
  }

}
