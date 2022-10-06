/** Bucles e interaciones */

//WHILE
/*
//Incremento

let i = 0;
while (i <= 15){
    console.log('El valor de i : ',i);
    i = i + 1;
}

// Decremento

let numero = 100;

while (numero > 0 ){
    document.write( "Te queda de saldo ", numero, '<br>');
    numero = numero - 5;
}



//DO WHILE

let i = 5;

do{
    console.log("El valor de i = ", i);
    i = i + 1;
} while (i < 5)


// Practica 1 While

let pasos = 100;

while (pasos > 0){
    if (pasos === 1){
        document.write("Solo faltan ", pasos,  " paso por caminar. ", '<br>');
    } else{
            document.write("Solo faltan ", pasos,  " pasos por caminar. ", '<br>');
    }

    pasos= pasos - 1;
}

// CICLO FOR

for (let i = 0; i <=10; i++){
    alert (i)
}

*/
for (let i = 1; i <= 5; i++ ){

// Solicitar en cada repeticion un nombre
let ingresarNombre = prompt('Ingrese un nombre');

// Informar el turno asiganado
    alert ("Turno nro " + i + " Nombre: " +ingresarNombre);
}

for (let i = 1; i <= 20; i++){
    //Solitar en cada repetición un nombre
    let ingresarNombre = prompt('Ingrese un nombre');

    // Informar el turno asignado con el nombre
    alert ("Turno nro ", i, "Nombre: ", ingresarNombre);
}






// Propiedad LENGTH del array 
for (let i = 0; i < 4; i++) {
    console.log(i);
    } 
    

    let frutas = [
        "Manzana",
        "Pera",
        "Frutilla",
        "Pera",
        "Mora",
        "Limón",
        "Kiwi", 
        "Uvas"
        ];


            for (let i = 0; i< frutas.length; i++ ){
                let fruta = frutas[i];
                console.log (fruta + ' tiene ' + fruta.length + ' letras')
            }



