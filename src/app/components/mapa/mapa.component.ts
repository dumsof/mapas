/* para generar el componente se debe indicar en cual de los modules se quiere que se importe, e
esto se debe que la aplicación contiene dos modulos el cual uno es para los componentes de angular material
comando cli: ng g c components/mapa --module=app.module --spec=false */
import { Component, OnInit } from '@angular/core';

/* material designa para mostrar snack bar mensaje emergente lado derecho inferior. */
import { MatSnackBar } from '@angular/material';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(public snackBar: MatSnackBar) {
    /* const nuevoMarcador = new Marcador(51.678418, 7.809007);
    this.marcadores.push(nuevoMarcador); */

    /* se recupera la información de los marcadores y se convierte de texto plano de json a un array */
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  /* este metodo se ejecuta con el evento mapClick y pasa como parametro el envento
     que contiene las coordenas del punto donse se hace click en el mapa, latitud, longitud */
  agregarMarcador(evento) {
    const coords: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado con exito', 'Cerrar', { duration: 3000 });
  }

  borrarMarcador(index: number) {
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado con exito', 'Cerrar', { duration: 3000 });
  }

  guardarStorage() {
    /* se guarda en el local storage el valor de los marcadores, se convierte en un string de json */
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
