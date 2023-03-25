import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../servise/product.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
id:any;
data:any;
loading:boolean=false;
rating:number=0

  constructor( private _route:ActivatedRoute ,private _ProductsService:ProductsService) {
    this.id=this._route.snapshot.params['id'];
    console.log(this.id)
   }


getProduct(){
  this.loading=true;
  this._ProductsService.getProductsById(this.id).subscribe((res)=>{
this.loading=false;
    this.data=res;
    this.rating=this.data?.rating.rate
// console.log(this.data);
  },(error)=>{
    this.loading=false;
    console.log(error)
  })
}
ngOnInit(): void {
  this.getProduct()
}
}
