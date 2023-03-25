import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../servise/product.service';

@Component({
  selector: 'app-product-cate',
  templateUrl: './product-cate.component.html',
  styleUrls: ['./product-cate.component.scss']
})
export class ProductCateComponent implements OnInit {
keyword:string="";
cartProduct:any[]=[];
products:Product[]=[];
loading:boolean=false;
constructor(private ActivatedRoute:ActivatedRoute ,private ProductsService:ProductsService) { 
  this.keyword=this.ActivatedRoute.snapshot.params['keyword']
}
getProdustCategory(keyword:string){
  this.loading=true;
  this.ProductsService.getProductsByCategory(keyword).subscribe((res)=>{
this.products=res;
this.loading=false;
  })
}
  ngOnInit(): void {
    this.getProdustCategory(this.keyword);
  }
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!);
      let exist=this.cartProduct.find(item=>item.item.id==event.item.id)
if(exist){
  alert("product is allredy exist")
}else{
  this.cartProduct.push(event);
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))
}  
    }else{
      this.cartProduct.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    }

// console.log(event)
  }

}
