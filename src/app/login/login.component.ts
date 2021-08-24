import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string ="";

  constructor(
    private router: Router
  ) { } //route:Router

  ngOnInit(): void {
  }


 loginUserName(){
    if(this.userName ==""){
  
    }else{
      alert("Please type your name!")
      
    }
  }

}
