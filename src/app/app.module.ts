import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TrainerComponent } from './trainer/trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonsComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //Http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
