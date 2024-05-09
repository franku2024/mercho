import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { CopaComponent } from './pages/copa/copa.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { LigaComponent } from './pages/liga/liga.component';
import { LibertadoresComponent } from './pages/libertadores/libertadores.component';

const routes: Routes = [
  {
  path:"menu",component:MenuComponent
},
{
  path:"copa",component:CopaComponent
},
{
path:"equipos",component:EquiposComponent  
},
{
  path:"liga",component:LigaComponent
},
{
  path:"libertadores",component:LibertadoresComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
