import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from '../service/clientes.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private router:Router, private auth: ClientesService) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token=localStorage.getItem('token');
        if(token){
            this.auth.validateToken().subscribe((data:any)=>{
              if(data.rol === "admin"){
                this.router.navigate(['/create']);
              }else {
                this.router.navigate(['/admin']);
              }
            })
      }
      return true
    }
}
