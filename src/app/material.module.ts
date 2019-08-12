/* para crear este modulo se ejecuta el comando cli
ng g module material --flat, meterial seria el nombre y --flat para que no cree una nueva carpeta */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes angular material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

/* se utiliza exports: con el fin de que donde se importe el modulo MaterialModule, el sistema exporte los modulos que estan
definido en esta parte */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
