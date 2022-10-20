/** Clase 16: DOM - EVENTOS */
/* 
//1. Seleccionar elementos del DOM

let miBoton = document.getElementById('boton');
console.dir(miBoton);

//2 Determinar el evento a escuchar sobre el elemento (Primera forma)

miBoton.addEventListener('click', respuestaClick);


//Respuesta al evento

function respuestaClick(){
    console.log("Respuesta a evento");
}

miBoton.addEventListener('click', respuestaClick2);
function respuestaClick2(){
    console.log('Otro Manejador');
}



//También podemos usar las propiedades ON (Segunda forma)

miBoton.onclick = () => {
    console.log('Hola desde manejador onclick');
}

*/
// Declaración de clase PRODUCTO

class Producto{
    constructor(id, nombre, precio) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

//Instanciar objetos y asociar array
const productos = [];
productos.push(new Producto (1, "DONA", 60));
productos.push(new Producto (2, "PAN", 460));
productos.push(new Producto (3, "TORTA", 560));
productos.push(new Producto (4, "LECHE", 760));


//Recorro el array para crear un nodo por valor en el array

for (const producto of productos){
    let divProducto = document.createElement("div");

    divProducto.innerHTML = `<h3> Nombre: ${producto.nombre} </h3>
                            <h4> Precio: ${producto.precio}</h4>
                            <button id = '${producto.id}' class = 'btnCompra'> Comprar </button>
                            `;

document.body.appendChild(divProducto); //Agrego un nuevo hijo a body para que lo muestra en el HTML

}

//Seleccionar botones generados por clases

let botones = document.getElementsByClassName('btnCompra');
// console.log(botones);

for (const boton of botones) {
    boton.addEventListener('click', function (){
        let seleccion = productos.find (producto => producto.id == this.id);
        console.log('El producto seleccionado es '+seleccion.nombre);


    }
    
    )
    
}


//Obtener el formulario

let miFormulario = document.getElementById('registroProducto');

miFormulario.onsubmit = (e) => {
    //Empleamos este método para prevenir el comportamiento por defecto del submit
    e.preventDefault();
    //Si usamos THIS en la arraw function no obtenemos el objeto del evento (obtenemos el contexto global del objeto -> window)
    console.log (this);
    //en equivalencia podemos usar e.target para obtner el objeto asociado al evento
    console.log(e.target);

    //y con e.target.id obtenemos el evento id de forma equivalente a this.id
    console.log(e.target.id);
    //Obtenemos los inpust hijos del formulario
    const inputs = miFormulario.children;

    //Instanciamos un objeto usando los values de cada input
    productos.push(new Producto (0,inputs[0].value, inputs[1].value));
    console.log(productos);
}
