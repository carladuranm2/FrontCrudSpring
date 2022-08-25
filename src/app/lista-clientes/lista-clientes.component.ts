import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {
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
}
