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
