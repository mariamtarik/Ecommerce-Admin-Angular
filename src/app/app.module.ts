import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { FooterComponent } from './shared/componants/footer/footer.component';
import { HeaderComponent } from './shared/componants/header/header.component';



@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,HttpClientModule,AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
