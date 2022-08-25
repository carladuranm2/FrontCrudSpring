import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.scss']
})
export class CreateUsuariosComponent implements OnInit {
  public nombre: string = "";
  public telefono:number= 0;
  public edad: number = 0;
  public direccion: string = "";
  public email:string = "";
  public rol:string = "";
  public password: string="";
  constructor(public newUser : ClientesService) { }

  ngOnInit(): void {

  }

  createNewUser(){
    const json = {
    "name": this.nombre,
    "email": this.email,
    "edad":this.edad,
    "password":this.password,
    "telefono":this.telefono,
    "direccion":this.direccion,
    "login":true,
    "rol":this.rol
    }
    this.newUser.CreateUser(json).subscribe((data:any) => {
      console.log(data,"data");
    })
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

}
