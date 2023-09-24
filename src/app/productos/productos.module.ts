import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgregarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
