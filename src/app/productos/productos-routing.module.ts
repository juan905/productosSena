import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [
  {
    'path': "agregar-producto", component : AgregarProductoComponent
  },
  {
    'path': "editar-producto/:id", component : EditarProductoComponent
  },
  {
    'path': "**", redirectTo: "agregar-producto"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
