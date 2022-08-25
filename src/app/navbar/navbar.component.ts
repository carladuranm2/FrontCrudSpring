import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public TOOGLE: any = false;
  public Active= false;
  public here = true;
  public salir = false;
  constructor() { }

  ngOnInit(): void {
  }

  toogle (): void {
    this.TOOGLE = !this.TOOGLE;
  }

  login(){
    this.Active= true;
    this.salir = true;
    this.here = false;
  }

  logOut(){
    this.Active = false;
    this.here = true;
    this.salir = false;
  }
}
