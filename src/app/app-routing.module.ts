import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { CartComponent } from './carts/componants/cart/cart.component';
import { AllProductsComponent } from './products/componants/all-product/all-product.component';
import { HomeComponent } from './products/componants/home/home.component';
import { ProductCateComponent } from './products/componants/product-cate/product-cate.component';
import { ProductsDetailComponent } from './products/componants/products-detail/products-detail.component';

const routes: Routes = [

  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"products",canActivate :[AuthGuard],component:AllProductsComponent},
{path:"details/:id" ,canActivate :[AuthGuard] ,component:ProductsDetailComponent},
{path:"category/:keyword" ,canActivate :[AuthGuard] ,component:ProductCateComponent},
{path:"cart",canActivate :[AuthGuard],component:CartComponent},
{path:"signin",component:SigninComponent},
{path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
