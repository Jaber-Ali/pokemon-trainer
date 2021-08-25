import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
   //pokemons: string[] = [];
  
  constructor( private route:Router) { }

  ngOnInit(): void {
   //localStorage.getItem("pokemons");
   
  }
  // dispalyCatchedPokemons(){
    get pokemons():any{
      return localStorage.getItem("catched-pokemons"); //splite to an array and later on loop in html
    }

  }
 


