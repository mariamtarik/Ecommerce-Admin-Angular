import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 



isLogin:boolean=false;
  constructor( private _AuthService:AuthService ) { 
    _AuthService.currentUser.subscribe(()=>{
if(_AuthService.currentUser.getValue() != null){
  this.isLogin=true
}else{
  this.isLogin=false

}
    })
  }
  isLogout(){
    this._AuthService.logOut();
  }
   


  ngOnInit(): void {
 
  
  }

}
