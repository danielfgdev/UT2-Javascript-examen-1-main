/**
 * 1 Condicionales [3 puntos]
 * 
 * Crear un programa que pida al usuario(prompt) que introduzca uno de los siguientes caracteres: + - x /
 * 
 * Si introduce '+' mostrar por consola 'sumar'
 * Si introduce '-' mostrar por consola 'restar'
 * Si introduce 'x' mostrar por consola 'multiplicar'
 * Si introduce '/' mostrar por consola 'dividir'
 * Si no introduce ninguno de los anteriores, mostrar :'no conozco esa operación'
 * 
 */



let caracter = prompt("introduce uno de los siguientes caracteres: + - x / ")

if (caracter === "+") {
    console.log("sumar")
} else if (caracter === "-") {
    console.log("restar")
} else if (caracter === "x") {
    console.log("multiplicar")
} else if (caracter === "/") {
    console.log("dividir")
} else {
    console.log("No conozco esa operacion")
}

console.log('ejercicio 1') //no quitar este console.log, empezar debajo el ejercicio