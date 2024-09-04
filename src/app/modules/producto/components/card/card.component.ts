import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  coleccionProducto: Producto[] = [];

  productoSeleccionado!: Producto

  modalVisible: boolean = false;
//booleano para manejar la visibilidad de "ultima compra"
  compraVisible:boolean = false;
//directivas para comunicarnos con el componente padre
  @Input() productoReciente: string = '';
//output sera definido como un nuevo evento
  @Output() productoAgregado = new EventEmitter<Producto>;

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProducto = producto;
    })
  }

  mostrarVer(info: Producto) {
    this.modalVisible = true;

    this.productoSeleccionado = info
  }

  agregarProducto(info:Producto){
    this.productoAgregado.emit(info);

    this.compraVisible = true;
  }

}
