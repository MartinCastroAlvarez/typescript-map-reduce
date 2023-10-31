export class Cerveza {
    graduacionAlcoholica: number;
    malta: string;
    cantidad: number;
    amargor: string;
    lupulo: string;
    marca: string;
     levadura: string;

    constructor(
        graduacionAlcoholica: number,
        malta: string,
        cantidad: number,
        amargor: string,
        lupulo: string,
        marca: string,
        levadura: string
    ) {
        this.graduacionAlcoholica = graduacionAlcoholica;
        this.malta = malta;
        this.cantidad = cantidad;
        this.amargor = amargor;
        this.lupulo = lupulo;
        this.marca = marca;
        this.levadura = levadura;
    }
}