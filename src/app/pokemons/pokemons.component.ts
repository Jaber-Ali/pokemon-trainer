import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = []; 
  constructor( private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPokemons() //returns and runs getPokemons method
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string; }) => {
          this.dataService.getPokemonsByName(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
            
            });

        });
      });

  }
  // This method is to catch pokemons and adds them to  local storage.
  catchPokemons(pokemon: string): void {
    // console.log(pokemon)
    if (localStorage.getItem("catched-pokemons")) {
      localStorage.setItem("catched-pokemons", localStorage.getItem("catched-pokemons") + "," + pokemon);

    } else {
      localStorage.setItem("catched-pokemons", pokemon);
    }
    alert(" You have catched " + " " + pokemon);
  }

}
