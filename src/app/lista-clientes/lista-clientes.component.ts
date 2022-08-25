import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {
  public nombre: string = "";
  public telefono:number= 0;
  public edad: number = 0;
  public direccion: string = "";
  public email:string = "";
  public rol:string = "";
  public password: string="";
  constructor(public userService : ClientesService) { }
  ngOnInit(): void {
  }
  EditUser(){

  }
}
