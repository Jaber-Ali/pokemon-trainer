import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) {
  }
  //gets all pokemons from PokeApi
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
   //gets specific pokemon by name from PokeApi
  getPokemonsByName(name: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
