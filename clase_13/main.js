/** Funciones */

/*
// function saludar(){
//     let nombre = prompt ('ingresa tu nombre');
//     alert ("Hola "+ nombre)
// }

let nombre = "Pepito";

saludar('Harry', 'Potter', 5)

function saludar(nombre, apellido, edad){
    console.log("Hola " + nombre+" "+ apellido+" Edad: "+ edad)
}


saludar(15,'Weasley', 'Ron')
saludar('Hermione')

// Valores de retorno


function multiplicar (num1, num2){
    let num3 = 10;
    return (num1 + num2 ) * 3;
}


let resultado = multiplicar(2, 5);


console.log("El resultado es " + resultado);


// Ejercicio

// a. Crear la función

function getLargoNombre(nombre){
    return nombre.length;
}

// Guardar el valor retorno y mostrarlo en consola

let nombreLength = getLargoNombre('Hermione');
console.log('Cantidad de caracteres del nombre '+nombreLength);


// Scope

let numero = 1;	//Variable global

function sumarEdad(edad) {
    let num = 2; // Varible local
    
    return edad + num;
}

console.log(sumarEdad(5));
console.log(num);




// Funciones anónimas

const suma = function (a, b) { return a + b };
console.log(suma(18, 20));


// Funciones flecha

const resta = (a, b) => a - b;
console.log(resta(38, 20)); 


// Ejemplo
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;


const iva = x => x * 0.21;

let precioProducto = 600;
let precioDescuento = 10;

// Calculamos el precioProducto + IVA - precioDescuento


let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento)

console.log(nuevoPrecio);*/


let encabezado = document.querySelector('h1');
console.log(encabezado.innerText);

let texto = document.querySelector('.texto')
console.log(texto.innerHTML);