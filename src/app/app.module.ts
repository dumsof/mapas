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

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGoyUyIzyhzW63IzBAwqBgIrIZbzSJqkc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
