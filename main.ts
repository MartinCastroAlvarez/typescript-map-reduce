import { Cerveza } from "./Cervezas";

const cerveza1 = new Cerveza(5.0, "Pilsner", 355, "Amargo", "Cascade", "Cerveza A", "Ale");
const cerveza2 = new Cerveza(6.5, "IPA", 473, "Muy amargo", "Centennial", "Cerveza B", "Ale");
const cerveza3 = new Cerveza(4.7, "Lager", 330, "Suave", "Saaz", "Cerveza C", "Lager");
const cerveza4 = new Cerveza(7.2, "Stout", 500, "Amargo", "Chinook", "Cerveza D", "Ale");
const cerveza5 = new Cerveza(4.2, "Blonde Ale", 355, "Moderado", "Amarillo", "Cerveza E", "Ale");
const cerveza6 = new Cerveza(5.8, "Wheat Beer", 330, "Suave", "Hallertau", "Cerveza F", "Weizen");
const cerveza7 = new Cerveza(6.0, "Amber Ale", 473, "Amargo", "Simcoe", "Cerveza G", "Ale");
const cerveza8 = new Cerveza(4.3, "Pilsner", 355, "Suave", "Tettnang", "Cerveza H", "Lager");
const cerveza9 = new Cerveza(5.5, "IPA", 330, "Amargo", "Ahtanum", "Cerveza I", "Ale");
const cerveza10 = new Cerveza(4.8, "Lager", 500, "Moderado", "Fuggle", "Cerveza J", "Lager");

// Almacena las cervezas en un array
const cervezas: Cerveza[] = [cerveza1, cerveza2, cerveza3, cerveza4, cerveza5, cerveza6, cerveza7, cerveza8, cerveza9, cerveza10];

console.log(`lista de cervezas: ${JSON.stringify(cervezas)}`);

const cantidadTotal = cervezas.reduce((total, cerveza) => total + cerveza.cantidad, 0);

console.log(`cantidad total de cervezas: ${cantidadTotal}`);

const cantidadTotal2 = cervezas.reduce((total, cerveza) => { 
    return total + cerveza.cantidad
}, 0);

console.log(`cantidad total de cervezas 2: ${cantidadTotal2}`);

const cantidadSuave = cervezas.reduce((total, cerveza) => {
    if (cerveza.amargor === "Suave") {
        return total + cerveza.cantidad
    }
    return total 
}, 0);

console.log(`cantidad total de cervezas suaves: ${cantidadSuave}`);

const cantidadAmargo = cervezas.reduce((total, cerveza) => {
    if (cerveza.amargor === "Amargo") {
        return total + cerveza.cantidad
    }
    return total 
}, 0);

console.log(`cantidad total de cervezas amargas: ${cantidadAmargo}`);

const cantidadIPA = cervezas.reduce((total, cerveza) => {
    if (cerveza.malta === "IPA") {
        return total + cerveza.cantidad
    }
    return total 
}, 0);

console.log(`cantidad total de cervezas IPA: ${cantidadIPA}`);

const cervezasSuaves = cervezas.filter(cerveza => cerveza.amargor === "Suave");
const cantidadesSuaves = cervezasSuaves.map(cerveza => cerveza.cantidad);

console.log("Cantidades de cervezas suaves:", cantidadesSuaves);

const cervezasAmargas = cervezas.filter(cerveza => cerveza.amargor === "Amargo");
const maltaAmargas = cervezasAmargas.map(cerveza => cerveza.malta);

console.log("Cantidades de maltas Amargas:", maltaAmargas);