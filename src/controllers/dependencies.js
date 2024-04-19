import { Stack } from "../models/Pila.js";
import { Convertir } from "../models/Convertir.js";

export const createConverter = function(expresion) {
    return new Convertir(expresion);
};

export const createStack = function(){
    return new Stack();
};

