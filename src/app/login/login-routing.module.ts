import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {'path': "loginUsuarios", component: AutenticacionComponent},
  {'path': "registroUsuarios", component: RegistroComponent},
  {'path': '**', redirectTo: 'loginUsuarios'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
