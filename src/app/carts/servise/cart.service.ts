import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  constructor( private http:HttpClient) {   
  }
  getAllCart(param?:any){
    // startdate=2019-12-10&enddate=2020-10-10
    if(param){
      let params=new HttpParams()
      params=params.append("startdate",param?.startDate).append("enddate",param?.endDate)
    return this.http.get(`https://fakestoreapi.com/carts`,{params})
    }else{
      let params=new HttpParams()
    params=params.append("startdate","2019-12-10").append("enddate","2020-10-10")
    return this.http.get(`https://fakestoreapi.com/carts`,{params})

    }
  
  }
  deleteOneCart(id:number){
return this.http.delete(`https://fakestoreapi.com/carts/${id}`)
  }
}
