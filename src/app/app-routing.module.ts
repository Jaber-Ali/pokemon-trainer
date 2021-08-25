import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
{
  path: '',
  component: PokemonsComponent,
  canActivate: [AuthGuard]
},
{
  path: 'pokemons',
  component: PokemonsComponent,
  canActivate: [AuthGuard]
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'trainer',
  component: TrainerComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
