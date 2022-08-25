import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsuariosComponent } from './create-usuarios/create-usuarios.component';
import { CanActivateViaAuthGuard } from './guards/can-activate-via-auth-guard.service';
import { NoAccessGuard } from './guards/no-access.guard';
import { ListaAdminComponent } from './lista-admin/lista-admin.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaViewerComponent } from './lista-viewer/lista-viewer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[NoAccessGuard],
    data: { animation: 'login' },
  },
  {
    path: 'create',
    component: CreateUsuariosComponent,
    canActivate:[CanActivateViaAuthGuard],
    data: { animation: 'create' }
  },
  {
    path: 'admin',
    component: ListaAdminComponent,
    data: { animation: 'admin' }
  },
  {
    path: 'viewer',
    component: ListaViewerComponent,
    data: { animation: 'viewer' }
  },
  {
    path: 'user',
    component: ListaClientesComponent,
    data: { animation: 'user' }
  },
  { path: '**', redirectTo:"login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
