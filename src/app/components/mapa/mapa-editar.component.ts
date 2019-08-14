import { Component, OnInit, Inject } from '@angular/core';

/* trabaja la aproximación por dato en los formularios */
import { FormBuilder, FormGroup } from '@angular/forms';

/* poder capturar la información que envia la llamada o formulario padre */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {
  forma: FormGroup;
  /* en este componente que sirve como dialogo, se recibe información del padre por medio de la data y se hace una referencia
  al componente que seria el mismo el cual se utilizo en la llamada del dialogo */
  constructor(public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marcador,
    formBuilder: FormBuilder) {
    /* obtener la informacion del formulario x medio de un formbuilder */
    this.forma = formBuilder.group({
      titulo: data.titulo,
      descripcion: data.descripcion
    });
    console.log('datos del padre', data);
  }

  ngOnInit() {
  }

  guardarCambios() {
    /* en este punto se cierra el formulario y se envia los datos al padre por medio de this.forma.value
    que contiene los datos del formulario, en el close como parametro los datos */
    this.dialogRef.close(this.forma.value);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
