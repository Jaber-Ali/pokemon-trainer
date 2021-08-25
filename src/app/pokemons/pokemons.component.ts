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
  constructor(private router: Router, readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string; }) => {
          this.dataService.getPokemonsByName(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });

        });
      });

  }
  catchPokemons(pokemon: string): void {
    if (localStorage.getItem("catched-pokemons")) {
      localStorage.setItem("catched-pokemons", localStorage.getItem("catched-pokemons") + "-" + JSON.stringify(pokemon));

    } else {
      localStorage.setItem("catched-pokemons", JSON.stringify(pokemon));
    }
    alert(" You have catched " + " " + pokemon);
  }

}
