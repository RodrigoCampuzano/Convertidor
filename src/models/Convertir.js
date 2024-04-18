import { createStack } from "../controllers/dependencies.js";

export class Convertir{
    
conversion = function(expresion){
    let stackSalida = createStack()
    let listaOperadores = createStack()

    expresion = expresion.match(/[0-9]+|[-+*//*()]/g)
    expresion = expresion.reverse()

    expresion.forEach(element => {
        switch (element) {
            case "+":
            case "-":
            case "*":
            case "/":
                listaOperadores.push(element)
                break;
            
            case "(":
                listaOperadores.push(element)
                listaOperadores.pop()
                while(listaOperadores.peek() != ")")
                    stackSalida.push(listaOperadores.pop())
                listaOperadores.pop()
                break;
            case ")":
                listaOperadores.push(element)
                break;
            default:
                stackSalida.push(element)
                break;
        }
    });

    while(!(listaOperadores.isEmpty()))
        stackSalida.push(listaOperadores.pop())
    expresion = []
    
    while(stackSalida.size() != 0)    
        expresion.push(stackSalida.pop())  
    let expresionPrefija = expresion.join() 
    expresion.reverse()

    return [stackSalida.pop(),expresionPrefija]
    }
}