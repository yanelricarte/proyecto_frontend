/** Objetos */

//Declaración de un objeto literal

/*const producto1 = {
    id: 1,
    nombre: "Tallarines",
    precio: 80.5
}
console.log(producto1.id);
console.log(producto1.nombre);
console.log(producto1.precio);

// producto1["nombre"] = "Tirabuzon";

// console.log(producto1.nombre);

//Imprimo las propiedades del objeto con notación punto

alert (
    "El producto id: " + producto1.id +
    "\nNombre " + producto1.nombre +
    "\nPrecio $ " + producto1.precio
);

//Imprimo las propiedades del objeto con notación corchete
alert (
    "El producto id: " + producto1['id'] +
    "\nNombre " + producto1['nombre'] +
    "\nPrecio $ " + producto1['precio']
); 
*/
/*
// Ejemplo de función constructora

function Producto (id, nombre, precio){
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    //Método
    this.descuento = function(valor){
        this.precio -= valor;
    }
}

//Instanciar objetos con función constructora

const producto2 = new Producto(1, "Tallarines", 80.5);
const producto3 = new Producto(2, "Pan", 100);
const producto4 = new Producto(3, "Arroz", 90.5);

console.log(producto2);
console.log(producto3);
console.log(producto4);

producto4.descuento(10);
console.log(producto4.precio);



// Ejemplo

//Si quisiera que el usuario ingrese los valores por promt

const producto5 = new Producto( prompt ("Ingresar id"),
prompt ("Ingresar nombre"),
prompt("Ingresar precio"));

console.log(producto5);
producto5.descuento(100);
console.log(producto5.precio);





function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
const persona3 = new Persona("Bart", 9, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
persona3.hablar();



*/

// Declaración de clase
class ProductoClass{
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    descuento(valor){
        this.precio -= valor;
    }
}

//Instanciar objetos con clase

const producto6 = new ProductoClass(3, "Chocolate", 250);
console.log(producto6);
producto6.descuento(40);
console.log(producto6);

//Recorrer propiedades y valores por propiedad de un objeto

for (let propiedad in producto6){
    console.log(propiedad);
    console.log(producto6[propiedad]);
}







/*
//Operador in y for… in

const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};

//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);

//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);

//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
*/