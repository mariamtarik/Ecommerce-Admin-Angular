import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,AppRoutingModule
  ]
})
export class AuthModule { }
