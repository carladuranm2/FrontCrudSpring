import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-lista-viewer',
  templateUrl: './lista-viewer.component.html',
  styleUrls: ['./lista-viewer.component.scss']
})
export class ListaViewerComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'edad', 'telefono', 'direccion'];
  dataSource = [];
  constructor(public userService : ClientesService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUser().subscribe((data : any) => {
      console.log('====================================');
      console.log(data.data);
      console.log('====================================');
      this.dataSource = data.data;
    })
  }

  deleteUser(){
    this.userService.deleteUser(2).subscribe((data : any) => {
      this.getUsers();
      console.log('====================================');
      console.log("succes");
      console.log('====================================');
    })
  }

}
