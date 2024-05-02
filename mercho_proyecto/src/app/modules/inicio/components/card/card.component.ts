import { Component } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //propiedad publica (tipo array)
  public info: Equipo[];

  constructor(){
    this.info=[
      {
        id:"animal1",
        edad:0,
        nombre:"CHANCHO BOSTERO",
        imagen:"https://fbi.cults3d.com/uploaders/18860374/illustration-file/850c6ac3-dcb4-4f25-8a27-1c4e3dbcc908/render.png",
        alt:"boca jrs"
      },
      {
        id:"animal2",
        edad:0,
        nombre:"GALLINA",
        imagen:"https://i.pinimg.com/originals/79/a4/66/79a4662f8c497002a0d432f3e01adb74.jpg",
        alt:"river"
      },
      {
        id:"animal3",
        edad:0,
        nombre:"CUERVO",
        imagen:"https://i.pinimg.com/736x/d0/01/38/d001380589d9fc4a59b6827e1437e992.jpg",
        alt:"san lorenzo"
      }
    ]
  }

}
