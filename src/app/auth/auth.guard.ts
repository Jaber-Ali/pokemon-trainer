import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
     boolean
     {
       //Checks if tariner is in localStorage
        if (localStorage.getItem('trainername')) {
          // access allowed
            return true;
        } else {
          //access denied
          this.router.navigateByUrl('/login')
          return false;
        }
    }
  
}
