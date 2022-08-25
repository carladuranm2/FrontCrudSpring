import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  constructor(private router: Router, private activateRoute: ActivatedRoute, private user: ClientesService) { }

  ngOnInit (): void {
  }

  redirectLogin () {
    const user = { email: this.email, password: this.password };
    const emailbtoa = btoa(this.email);
    const passwordbtoa = btoa(this.password);
    const data = {
      username: emailbtoa,
      password: passwordbtoa
    }
    this.user.login(data).subscribe(data => {
      if(data.status == "ok"){
        localStorage.setItem("token", data.token);
        localStorage.setItem("user",data.per);
        this.router.navigateByUrl("/create");
      }else {
        window.alert("no pudo ingresar")
      }

    });
  }
}

