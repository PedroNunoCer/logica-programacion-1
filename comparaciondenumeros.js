const prompt = require('prompt-sync')();
//Crear un programa en Javascript que realice lo siguiente:
// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let numero1 = prompt("Ingrese el primer número: " ); 
let numero2 = prompt("Ingrese el segundo número: " );
let numero3 = prompt("Ingrese el tercer número " );
// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
let mayor = Math.max(numero1,numero2,numero3);
let menor = Math.min(numero1,numero2,numero3);
let centro = (Number(numero1)+Number(numero2)+Number(numero3)) - mayor - menor;
// Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
console.log(mayor,centro, menor);
console.log(menor,centro, mayor);  
// Debe ser capaz de identificar si los números son _iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
if(numero1 == numero2 && numero1 == numero3){
    console.log("Los numero son iguales")
}
// Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
// Entradas: 
// 4, 4, 2.
// Salida:
// 4, 4, 2.
// 2, 4, 4.
// Entradas: 
// 4, 2, 4.
// Salida:
// 4, 4, 2.
// 2, 4, 4.
// Entradas: 
// 2, 4, 4.
// Salida:
// 4, 4, 2.
// 2, 4, 4.
// Pruébalo con las combinaciones de números que se te ocurran.
// Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
// Colócalo en un repositorio llamado “logica-programacion-1”






