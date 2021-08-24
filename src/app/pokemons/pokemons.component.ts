import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    //  this.dataService.fetchPokemon()
    this.dataService.getPokemons()
    .subscribe((response: any) =>{
        response.results.forEach((result: { name: string; }) => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse: any) => {
        this.pokemons.push(uniqResponse);
        console.log(this.pokemons);
        });

      });
    });
     
  }
  // get pokemons(): Pokemon[] {
  //   return this.dataService.pokemons()

  // }

}
