/** Condicionales, operadores y Arrays */
/* 
// Array vacio
let grupo = [];

// Array strings
let mascotas = ['gato', 'perro', 'conejo'];

// Array numeros
let numeros = [1, 2, 3, 8, 4];

// Array boolean
let verdades = [true, false, true];


let persona = [31258969, ' Fulanito', 'Cosme', 1981, true];

// Array de arrays
let resultados = [
    ['gato', 'miau'],
    ['perro', 'guau'],
    ['ardilla', 'wheee']
];


let datos = ['dato1', 'dato2', 'dato3'];
console.log(datos);
console.log(datos[2]);

// Propiedad LENGTH

let colorMascotas = [
    ['perro', 'marron', 'negro', 'rojo'], 
    ['gato', 'blanco','gris'], 
    ['pez', 'anaranjado'],
    ['jirafa', 'amarila']
    ];

// La catidad de arrays 
    console.log(colorMascotas.length);
// Accedemos a un posición
    console.log(colorMascotas[0][3]);
// La cantidad de elememtos en el array
    console.log(colorMascotas[1].length);
//La cantidad de caracteres del elemento
    console.log(colorMascotas[2][1].length);

    // CONDICIONALES



    if (a > 5) {
        console.log("El número es mayor a 5");
    } else if (a < 5){
        console.log("El numero es menor 5");
    } 
    
    else {
    console.log("El número es igual 5");
    }
   
    let a = 6;

    if (a < 5){
        if (a === 1){
            alert ("El número es menor a 5 y es 1");
        } else{
            alert (" El número es menor a 5, pero no es 1")
        }
    }



    // Sin operador ternario


    let edad1 = 19;
    let esMayorEdad1;

    if (edad > 18){
        esMayorEdad1 = true;
    } else{
        esMayorEdad1 = false;
    }

    // Operador condicional ternario



    let esMayorEdad = edad > 18 ? true : false;


    console.log("Es mayor de edad? " + esMayorEdad);


    let nombre = 'Pepito';
    let edad = 19;

    edad > 18 ? console.log(nombre + ' es mayor de edad') : console.log (nombre + ' no es mayor de edad');


    // -- PRÁCTICA CONDICIONALES /

    //1. Crear una lista

    let lista = ["Harina", "Papas", "Manzanas", "Jugo", "Chocolate"];


    //2. Prompt

    let articulo = prompt("¿Qué artículo desea agregar a la lista");

    // 3 

    if (lista.includes(articulo)){
        alert (articulo + ' ya está en la lista')
    } else {
        lista.push(articulo)
        alert("La lista es: " +lista)
    }

 
// Switch

let fruta = "banana";

switch (fruta) {
    case "manzana":
        color = "Rojo";
        break;
    case "kiwi":
        color = "Verde";
        break;
    default:
        color = "Blanco";
}


console.log("El color es " +color);



let color = prompt("Ingrese un color");

switch (color) {
    case "rosa":
        alert("Es Kimberly");
        break;
    case "negro":
        alert("Es Zack");
        break;
    case "amarillo":
        alert("Es Trini");
        break;
    case "azul":
        alert("Es Billy");
        break;
    case "roja":
        alert ("Es Jason");
        break;
    default:
        alert('No es un Power Ranger')
}

*/
console.log(new Date().getDay());

let numeroDia = new Date().getDay();

switch (numeroDia) {
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miércoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
        case 6:
        dia = "Sábado";
        break;

    default:
        dia = "Domingo";

}

console.log("Hoy es " + dia);
