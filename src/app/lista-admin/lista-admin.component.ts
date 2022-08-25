import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.scss']
})
export class ListaAdminComponent implements OnInit ,OnDestroy{
  displayedColumns: string[] = ['nombre', 'edad', 'telefono', 'direccion'];
  public dataSource: [] = [];
  public filterSearch = [];
  public filteredlistBlogs: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  constructor(public userService : ClientesService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    // this.filteredlistBlogs?.unsubscribe();
  }

  getUsers(){
    this.userService.getUser().subscribe((data : any) => {
      this.dataSource = data.data;
      this.filteredlistBlogs.next(this.dataSource.slice(0));
    })
  }
}
