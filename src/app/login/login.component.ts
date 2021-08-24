import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username: string;

  constructor(
    private router: Router
  ) { } //route:Router

  ngOnInit(): void {
  }

  // loginUser(){
  //   if(this.username = "")
     


  // }

}
