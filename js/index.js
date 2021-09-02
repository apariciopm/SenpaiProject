//-----------Ejercicio calculo de triángulos y área------------------    

let ladosTriangulo = {
  cateto: 2,
  base: 3,
  hipotenusa: 2,
  altura: 8,
};

console.log("El cateto de tu triángulo es de: " + (ladosTriangulo.cateto) + "cms.");
console.log("La base de tu triángulo es de: " + (ladosTriangulo.base) + "cms.");
console.log("La hipotenusa de tu triángulo es de: " + (ladosTriangulo.hipotenusa) + "cms.");
console.log("La altura de tu triángulo es de: " + (ladosTriangulo.altura) + "cms.");

if (ladosTriangulo.cateto <= 0 || ladosTriangulo.base <= 0 || ladosTriangulo.hipotenusa <= 0) {
    console.log("Faltan completar campos");
    }
    else if (ladosTriangulo.cateto === ladosTriangulo.base && ladosTriangulo.cateto === ladosTriangulo.hipotenusa) {
    console.log ("Es un triangulo Equilátero");
    }
   else if
     ((ladosTriangulo.cateto === ladosTriangulo.base && ladosTriangulo.cateto != ladosTriangulo.hipotenusa) || (ladosTriangulo.cateto === ladosTriangulo.hipotenusa && ladosTriangulo.cateto != ladosTriangulo.base) || (ladosTriangulo.base === ladosTriangulo.hipotenusa && ladosTriangulo.base != ladosTriangulo.cateto)) {
       console.log ("Es un triángulo Isósceles");
     }
     else if (ladosTriangulo.cateto != ladosTriangulo.base && ladosTriangulo.cateto != ladosTriangulo.hipotenusa) {
       console.log("Es un triángulo Escaleno");
    }

let base = ladosTriangulo.base;
let altura = ladosTriangulo.altura;

const area = function (base, altura){
    return (base * altura) / 2;
}
console.log("El área de tu triángulo es de: " + area(base, altura) + "cms.");


//-----------Ejercicio jugá a los dados------------------   
    
const numeroAleatorio = Math.round(Math.random() * 10);
9

// 8
let numeroElegido = prompt("Un número del 1 al 10");

// 9
// Si es igual, mostrar un mensaje de felicitaciones
console.log(numeroAleatorio)
if(parseInt(numeroElegido, 10) === 9) {
    alert("Felicitaciones");
// Si es menor, mostrar un mensaje de menor
} else if (numeroElegido < numeroAleatorio) {
    alert("Es menor" + 5 * 2);
} else if (numeroElegido > numeroAleatorio) {
    alert("Es mayor");
}


const dado = Math.round(Math.random() * 6);

let jugador = prompt("Elija un numero del 1 al 6");

console.log(dado)


let dinero =0;
while (dinero > 0) {
    dinero+=10;
    if (dinero > 0) {
    continue;    
    }
    else if (dinero >= 200) {
        break;
    }
    
    
}
console.log(dinero)

let number=201;

if (number > 100 ) {
        console.log("True");
}
else if (number < 200) {
  console.log("False");
}



/* 
Desarrolle un algoritmo que permita leer tres valores y almacenarlos en las variables A, B y C
respectivamente. El algoritmo debe imprimir cual es el mayor y cual es el menor. 
Recuerde constatar que los tres valores introducidos por el teclado sean valores distintos. 
Presente un mensaje de alerta en caso de que se detecte la introducción de valores iguales.
*/

let valorA = prompt ("Introducí un valor entero");
let valorB = prompt ("Introducí un valor entero");
let valorC = prompt ("Introducí un valor entero");

if (valorA = valorB || valorB = valorC || valorC = valorA) {
  
}