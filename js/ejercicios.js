/* 
Desarrolle un algoritmo que permita leer tres valores y almacenarlos en las variables A, B y C
respectivamente. El algoritmo debe imprimir cual es el mayor y cual es el menor. 
Recuerde constatar que los tres valores introducidos por el teclado sean valores distintos. 
Presente un mensaje de alerta en caso de que se detecte la introducción de valores iguales.
*/

let a = prompt("Ingresa el primer numero entero");
let b = prompt("Ingresa el segundo numero entero");
let c = prompt("Ingresa el tercer numero entero")

if (b = a) {
    b = prompt("Ingresa un numero difente que ");
    
}

let numeros = function (a, b, c) {
    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }
    if (c > mayor) {
        mayor = c;
        
    }
    return mayor;
}

alert(numeros(8,5,146));

/*
Escriba un programa para calcular la suma de los dos valores enteros dados. 
Si los dos valores son iguales, devuelve el triple de su suma */

let valorUno = prompt("Ingresa el primer valor");
let valorDos =  prompt("Ingresá el segundo valor");
let valorFinal = 0;
   {if (valorUno === valorDos) {
        let valorFinal = valorUno * 3;
    }
    else {
        valorUno + valorUno;
    }};

   alert(valorFinal);