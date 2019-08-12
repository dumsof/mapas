export class Marcador {

    public latitud: number;
    public longitud: number;

    public titulo = 'Sin Titulo';
    public descripcion = 'Sin Descripción';

    constructor(latitud: number, longitud: number) {
        this.latitud = latitud;
        this.longitud = longitud;
    }
}