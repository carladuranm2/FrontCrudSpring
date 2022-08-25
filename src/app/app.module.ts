import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUsuariosComponent } from './create-usuarios/create-usuarios.component';
import { ListaAdminComponent } from './lista-admin/lista-admin.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaViewerComponent } from './lista-viewer/lista-viewer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CanActivateViaAuthGuard } from './guards/can-activate-via-auth-guard.service';
import { FiltroPipe } from './pipes/FiltroPipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaClientesComponent,
    ListaAdminComponent,
    ListaViewerComponent,
    CreateUsuariosComponent,
    LoginComponent,
		FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
