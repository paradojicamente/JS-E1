// Ejercicio 1

function esParOesImpar(numero) {
    if (numero % 2 === 0) {
      console.log(`${numero} es par.`);
    } else {
      console.log(`${numero} es impar.`);
    }
  }

esParOesImpar(4);
esParOesImpar(7);


// Ejercicio 2

function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(`${num1} es mayor que ${num2}.`);
    } else if (num1 < num2) {
      console.log(`${num2} es mayor que ${num1}.`);
    } else {
      console.log(`${num1} y ${num2} son iguales.`);
    }
  }

compararNumeros(5, 10);
compararNumeros(12, 9);
compararNumeros(6, 6);


// Ejercicio 3

function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
      console.log(`${numero} es múltiplo de 5.`);
    } else {
      console.log(`${numero} no es múltiplo de 5.`);
    }
  }
  
esMultiploDe5(10); 
esMultiploDe5(7);
esMultiploDe5(25); 


// Ejercicio 4

function imprimirHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }
  
imprimirHasta(3);
imprimirHasta(7); 


// Ejercicio 5

function repetirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }
  
repetirPalabra("Perro", 3);
repetirPalabra("Windows", 2); 


// Ejercicio 6

function imprimirArray(arr) {
    arr.forEach(element => {
      console.log(element);
    });
  }
  
imprimirArray([4, 6, 8, 10, 12]);
imprimirArray(['x', 'y', 'z']);


// Ejercicio 7

function imprimirArraySinQuintaPosicion(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== 4) {  // Omitir el índice 4 (la 5ª posición)
        console.log(arr[i]);
      }
    }
  }
  
imprimirArraySinQuintaPosicion([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);


// Ejercicio 8

function multiplicarArray(arr, factor) {
    arr.forEach(numero => {
      console.log(numero * factor);
    });
  }
  
multiplicarArray([1, 2, 3, 4, 5], 5);
multiplicarArray([12, 24, 32], 7);   
