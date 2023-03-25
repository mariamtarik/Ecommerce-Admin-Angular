import { Component, OnInit } from '@angular/core';
import { CartService } from '../../servise/cart.service';
// import jwt_decode from 'jwt-decode';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './../../../products/servise/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


constructor(private _CartService:CartService ,private _Router:Router,private ProductsService:ProductsService) { }
  carts:any[]=[];
  products:any[]=[];
  details:any;
  view(index:number  ){
    this.products=[]
this.details=this.carts[index];
for(let x in this.details.products){
  this.ProductsService.getProductsById(this.details.products[x].productId).subscribe((res)=>{
this.products.push({item:res,quantity:this.details.products[x].quantity})
  }) 
}
  console.log(this.details);
  }
  dateForm:FormGroup =new FormGroup({
    startDate:new FormControl(null),
    endDate:new FormControl(null),
  })
  sendDate(){
    // console.log(this.dateForm.value);
    let date=this.dateForm.value;
    this._CartService.getAllCart(date).subscribe((res:any)=>{
       this.carts=res; 
    })

  }
  deleteOne(_id:number){
    // console.log(id)
    this._CartService.deleteOneCart(_id).subscribe((res)=>{
      // this.carts.filter((cart)=>{cart.id !== _id });
      alert("cart deleted success")
      console.log(this.carts);
      // this._Router.navigateByUrl('/cart',{skipLocationChange:true}).then(()=>{this._Router.navigate(["/cart"])})
    })
  }

  ngOnInit(): void {
  this.getCarts()
  }
 getCarts(){
  this._CartService.getAllCart().subscribe((cart:any)=>{
  this.carts=cart
  console.log(cart)
  })
 }

}
