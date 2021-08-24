import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
{
  path: 'pokemons',
  component: PokemonsComponent
},
{
  path:"",
  component: LoginComponent
},
{
  path:"trainer",
  component: TrainerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
