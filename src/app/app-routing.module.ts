import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'logueo-usuarios', loadChildren:()=> import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'productos', loadChildren:()=> import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: '**',
    redirectTo: 'productos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
