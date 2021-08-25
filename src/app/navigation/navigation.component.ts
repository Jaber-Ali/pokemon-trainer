import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }
//   pokemonsPage(): void {
//     if (!localStorage.getItem("trainername")) { //if no trainer logged in, so can't see Pokemon catalogue
//       this.router.navigateByUrl("/");
     
//    }
//     else if(localStorage.getItem("trainername")){
//      this.router.navigateByUrl("/pokemons");
//     }
  
// }
// trainerPage(): void{
//   if (!localStorage.getItem("trainername")) { 
//     this.router.navigateByUrl("/");
   
//  }
//   else if(localStorage.getItem("trainername")){
//    this.router.navigateByUrl("/trainer");
//   }

// }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
  }

}
