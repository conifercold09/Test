import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Order} from './orders';
import { Observable } from 'rxjs';

@Injectable()
export  class SalesDataService{
//public API = "https://localhost:44395/api/order";
public API = "https://advantageapi.azurewebsites.net/api/order"
public SUGARLEVELS_API = `${this.API}`;

constructor(private http: HttpClient){}
getOrder(page:number,limit:number):Observable<Array<Order>>{
    return this.http.get<Array<Order>>(this.API+'/'+page+'/'+limit);
    }
}