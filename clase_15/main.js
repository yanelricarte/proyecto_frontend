/** Clase 15: Manipulación del DOM */
/*
console.log(document); //Vemos el objeto document 
// console.dir(document);
 

console.log(document.head);
console.dir(document.head);

console.log(document.body);
console.dir(document.body);


//-----Métodos para obtener un nodo del DOM

let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerHTML); //Vemos el HTML interno

let nombre = "Cosme Fulanito";
titulo.innerHTML = "Hola " + nombre; //modifico el HTML interno con innerhtml



let parrafos = document.getElementsByClassName("parrafos");
console.log(parrafos);


let parrafosTag = document.getElementsByTagName("p");
console.log(parrafosTag);

// ------------------   Ejemplo de modificación SELECT DINÁMICO  //


const categorias = [];

//1- Solicitar una entrada al usuario

let entrada = prompt ("Ingresar categoria \n (Escribir 'ESC' para salir)")

// Si la estrada es distinta a 'ESC' en cada repetición cargar una categoria


while (entrada.toUpperCase() != "ESC"){
    //Incluir la categoria en el array

    categorias.push(entrada.toUpperCase());

    //Solicitamos una nueva categoria
    entrada = prompt ("Ingresar categoria \n (Escribir 'ESC' para salir)")
}

console.log(categorias);


//Obtenemos el elemento

let miSelect = document.getElementById("select");
console.log(miSelect);


// Recorrer el array


for (const categoria of categorias){
    miSelect.innerHTML += "<option>" + categoria + "</option>";
}
*/


// -------------Creación de un nuevo nodo

let titulo1 = document.createElement("h3"); //Creo el nodo
titulo1.innerHTML = "Hola desde JS"; // defino el contenido

document.body.appendChild(titulo1);


// Ejemplo de creación dinámica de nodos

class Producto{
    constructor(id, nombre, precio) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

const productos = [];
productos.push(new Producto (1, "DONA", 60));
productos.push(new Producto (2, "PAN", 460));
productos.push(new Producto (3, "TORTA", 560));
productos.push(new Producto (4, "LECHE", 760));


//Recorro el array para crear un nodo por valor en el array

for (const producto of productos){
    let divProducto = document.createElement("div");

    divProducto.innerHTML = `<h3> Nombre: ${producto.nombre} </h3>
                            <h4> Precio: ${producto.precio}</h4>`

document.body.appendChild(divProducto); //Agrego un nuevo hijo a body para que lo muestra en el HTML
}