import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  trainername: string= "";

  constructor(
    private router: Router
  ) { } //route:Router

  ngOnInit(): void {
  }


 loginTrainerName(){
    if(this.trainername !==""){
      localStorage.setItem("trainername", JSON.stringify(this.trainername));
      console.log()
      this.router.navigateByUrl("/pokemons");
  
    }else{
      alert("Please type your name!")
      
    }
  }

}
