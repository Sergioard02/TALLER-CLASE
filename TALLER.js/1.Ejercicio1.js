'use strict';

//1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, suma, resta, multiplicación, división e imprimir las operaciones. Validar la división entre 0(cero).


let numero1 = parseFloat(prompt('Dame el primer valor:'));
let numero2 = parseFloat(prompt('dame el segundo numero:'));

const suma=(num1,num2) =>{
    return(num1 + num2)
}
alert(suma)
const resta=(num1,num2) =>{
    return (num1 - num2);
}
alert(resta)
const multiplicacion=(num1,num2) =>{
    return(num1 * num2);
}
alert(multiplicacion);
const division=(num1, num2) =>{
    return (num1 / num2);
}
alert(division);

