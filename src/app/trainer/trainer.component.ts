import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
   
   
  }
    get pokemons():any{
      return localStorage.getItem("catched-pokemons")?.split(","); 
    }

  }
 


