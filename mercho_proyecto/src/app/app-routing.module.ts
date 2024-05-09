import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:"",component:InicioComponent
  },
  //carga perezosa -> 1 modulo
  //loadchildren: indica una ruta hija
  //()=>import:ruta de donde viene el module
  //then promesa/
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  {
    path:"",loadChildren:()=>import('./modules/menu/menu.module').then(m=>m.MenuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
