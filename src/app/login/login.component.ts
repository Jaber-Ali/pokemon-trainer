import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  trainername: string= "";

  constructor(
    private router: Router,
  ) { }
  //Checks if is in localStorage, if so redirect to pokemons
  ngOnInit(): void {
    if (localStorage.getItem("trainername")) {
      this.router.navigateByUrl("/pokemons")
    }
  }

 //This hanldles trainer login 
 loginTrainerName(){
    if(this.trainername !==""){
      localStorage.setItem("trainername", JSON.stringify(this.trainername));
      this.router.navigateByUrl("/pokemons");  
    }else{
      alert("Please type your name!")      
    }
  }

}
