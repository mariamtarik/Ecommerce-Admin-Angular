import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( private _AuthService:AuthService,private _Router:Router) { }
error=""
decodedToken:{id:string,role:string,iat:string}={id:"",role:"",iat:""}
  ngOnInit(): void {
  }
  loginForm:FormGroup =new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
  })
  login(){
    if(this.loginForm.invalid){
      return;
    }
    this._AuthService.signIn(this.loginForm.value).subscribe((data)=>{
      if(data.message=='signin success'){
        this.decodedToken = jwtDecode(data.token);
        if(this.decodedToken.role=="admin"){
          localStorage.setItem('adminTokenEcommerce',`Bearer ${data.token}`)
          this._AuthService.saveCurentUser();
           this._Router.navigate(['/cart'])
        }else{
          this.error="UnAuthorized User"
        }
     
      }
      else{
    this.error=data.message;
    this.loginForm.reset();
      }
    })
    
  }

}
