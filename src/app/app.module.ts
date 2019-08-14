import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Componentes angular material */
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

/* Importar el componente para utilizar el mapa de google */
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

/* permite trabajar los formulario por la aproximación por dato y formBuilder */
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  /* el entryComponent permite injectar como argumento y poder utilizar el componente com un dialog */
  entryComponents: [ MapaEditarComponent ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGoyUyIzyhzW63IzBAwqBgIrIZbzSJqkc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
