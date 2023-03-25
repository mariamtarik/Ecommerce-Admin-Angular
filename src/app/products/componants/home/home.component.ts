import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../servise/product.service';
ProductsService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoris:string[]=[];
  keyword:string="";
  constructor(private ProductsService:ProductsService) { }
  getcategories(){   
    this.ProductsService.getAllCategories().subscribe((res)=>{
      this.categoris=res;
      console.log(this.categoris)
   
  },err =>{
  
    console.log(err);
  })
    
  }
  getcate(e:any){
  // console.log(e.target.innerText);
  this.keyword=e.target.innerText
  }



  ngOnInit(): void {
    this.getcategories()
    
  }

}
