import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient,) { }


  getUser (): Observable<any> {
    return this.http.get(`${environment.getUsers}`);
  }

  deleteUser(idCliente:number):Observable<any>{
    return this.http.delete(`${environment.deleteUser}/${idCliente}`);
  }
  CreateUser(data : any){
    return this.http.post(environment.CreateUser,data);
  }

  login(user: any): Observable<any>{
    return this.http.post(environment.login, user);
  }
  validateToken(){
    const token = localStorage.getItem("token")||"";
    const headers = new HttpHeaders()
    .append('Authorization', token)
    return this.http.post(environment.validateToken,{},{ headers: headers })
  }
}
