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
// this handles logOut and will clear everything from localStorge and redirect to Home login component
  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
  }

}
