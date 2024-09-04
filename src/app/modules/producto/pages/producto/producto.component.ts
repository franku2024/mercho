import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  product:string = '';

  productosCarrusel: Producto[] = [];

  productoAniadido(producto:Producto){
    this.product = `${producto.nombre} : $${producto.precio}`;

    try {
      /*Agregamos la informacion por el parametro de la funcion a la coleccion de carrusel*/
      this.productosCarrusel.push(producto);

     Swal.fire({
      title: 'Bien',
      text: 'Ha añadido producto con exito',
      icon:'info'

     })
    } catch (error) {
      Swal.fire({
        title: 'Mama mia',
        text: 'Ha ocurrido un error\n'+error,
        icon:'error'
  
       })
    }
  }

}
