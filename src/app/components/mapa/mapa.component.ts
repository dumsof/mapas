/* para generar el componente se debe indicar en cual de los modules se quiere que se importe, e
esto se debe que la aplicación contiene dos modulos el cual uno es para los componentes de angular material
comando cli: ng g c components/mapa --module=app.module --spec=false */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
