import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { LigaComponent } from './pages/liga/liga.component';
import { CopaComponent } from './pages/copa/copa.component';
import { LibertadoresComponent } from './pages/libertadores/libertadores.component';


@NgModule({
  declarations: [
    MenuComponent,
    EquiposComponent,
    LigaComponent,
    CopaComponent,
    LibertadoresComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports:[
    LigaComponent,
    CopaComponent,
    EquiposComponent,
    LibertadoresComponent
  ]
})
export class MenuModule { }
