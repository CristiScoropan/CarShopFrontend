import { Brand } from "./brand.data";
import { Caroserie } from "./caroserie.data";
import { Fuel } from "./fuel.data";

export interface Car{
    id: number, 
    caroserie: Caroserie,
    brand: Brand,
    fuel: Fuel,
    price: number, 
    year: number,
    kilometres: number
}