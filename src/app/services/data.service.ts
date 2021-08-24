import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _pokemons: Pokemon[] = []
  private _error: string = ''
  constructor(private readonly http: HttpClient) {
  }
  // public fetchPokemon(): void {
  //   this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10')
  //     .subscribe((pokemons: any) => {
  //       this._pokemons = pokemons.results
  //     }, (error: HttpErrorResponse) => {
  //       this._error = error.message
  //     })
  // }
  // public pokemons(): Pokemon[] {
  //   return this._pokemons
  // }
  // public error(): string {
  //   return this._error
  // }
  // getMoreData(name: string) {
  //   return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  // }
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
  getMoreData(name: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
