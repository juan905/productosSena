import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AutenticacionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
