import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from '../service/clientes.service';
// import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAccessGuard implements CanActivate {
  constructor(private router:Router, private auth : ClientesService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token=localStorage.getItem('auth');
      if(token){
      return new Promise((resolve,reject)=>{
          this.auth.validateToken().subscribe(data =>{
            this.router.navigateByUrl("/")
            resolve(false)
          },err=>{
            resolve(true);
          })
        })
      }
      return true;
  }

}
