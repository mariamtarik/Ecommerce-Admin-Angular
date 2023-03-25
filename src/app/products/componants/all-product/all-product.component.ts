import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../servise/product.service';
import { CartService } from 'src/app/carts/servise/cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  // filteredData:Product[]=[];
  categoris: string[] = [];
  loading: boolean = false;
  imageUrl: string = '';
  addProduct: any;
  id: number = 0;
 
 
  constructor(
    private _servise: ProductsService,
    private _CartService: CartService
  ) {}
  getSelected(event: any) {
    console.log(event.target.value);
    this.addProduct.get('category').setValue(event.target.value);
  }
  AddProduct() {
    console.log(this.addProduct.value);
    this._servise.addNewProduct(this.addProduct.value).subscribe((res) => {
      this.addProduct.reset();
      alert('product added successfully');
    });
  }
  updateForm(product: any) {
    // console.log(id)
    this.id = product.id;
    this.imageUrl = product.image;
    this.addProduct.patchValue({
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    });
    
  }
  updateProduct() {
    console.log(this.id);
    console.log(this.addProduct.value);
    this._servise
      .updateProduct(this.id, this.addProduct.value)
      .subscribe((res) => {
        this.addProduct.reset();
        alert('product updated success');
      });
  }
  restForm(){
    this.addProduct.reset();
  }

  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      this.addProduct.get('image').setValue('your imge');
    };
  }

  getProducts() {
    this.loading = true;
    this._servise.getAllProducts().subscribe((res) => {
      this.products = res;
      // this.filteredData=res;
      console.log(this.products);
      // console.log(this.filteredData)
      this.loading = false;
    });
  }

  getcategories() {
    this.loading = true;
    this._servise.getAllCategories().subscribe(
      (res) => {
        this.categoris = res;
        this.loading = false;
        console.log(this.categoris);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.getProducts();
    this.getcategories();
    this.addProduct = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
    });
  }
}
