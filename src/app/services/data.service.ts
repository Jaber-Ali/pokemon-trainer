import { Injectable } from '@angular/core';
// import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) {
  }

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
  getPokemonsByName(name: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
