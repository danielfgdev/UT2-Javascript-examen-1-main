/**
 * 3 Función [4puntos]
 * 
 * Función que recibe como parámetros dos números y la operación a realizar. 
 * [1pt] Si la operación es 'sumar', muestra por pantalla la suma de ambos
 * [1pt] Si la operación es 'restar', muestra la resta
 * [1pt] Si la operación no  es ninguna de las dos, mostrar 'operación desconocida'
 * [1pt] Hacer que el parámetro de la operación sea siempre 'sumar' por defecto (en caso de que no se especifique)
 * 
 */


function calculo(num1, num2, operacion) {
    if (operacion === "sumar") {
        console.log(num1 + num2)

    } else if (operacion === "restar") {
        console.log(num1 - num2)

    } else if (operacion === "") {
        console.log(num1 + num2)

    } else {
        console.log("operacion desconocida")
    }
}

calculo(1, 2, "sumar")

console.log('ejercicio 3') //no quitar este console.log, empezar debajo el ejercicio
