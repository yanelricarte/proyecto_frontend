/** Clase 17 */

/* 
const personajes ={
team: "Star Wars Characters",
characters: [
{
	name: "Leia Organa",
	height: "150",
	mass: "49",
	hair_color: "brown",
	skin_color: "light",
	eye_color: "brown",
	birth_year: "19BBY",
	species: [],
		"starships": [],
}
]
}

console.log(personajes.team);
console.log(personajes.characters[0].height);

*/

// fetch('https://hp-api.herokuapp.com/api/characters')
// .then(response => response.json())
// .then(json => console.log(json));


// fetch('https://ghibliapi.herokuapp.com/films')
// .then(response => response.json())
// .then(json => console.log(json[3].director));



// fetch('https://hp-api.herokuapp.com/api/characters')
// .then(response => response.json())
// .then(json => {
//     for (let i = 0; i < json.length; i++){
//         if (json[i].house == "Gryffindor"){
//             console.log(json[i].name + " es de Gryffindor!!");
//         }
//     }
// }
    
//     );

// Opción con DOCUMENT.WRITE

// fetch('https://hp-api.herokuapp.com/api/characters')
// .then (response => response.json())
// .then(json => {
//     json.map(function(personaje){
//         document.write(htmlPersonajes(personaje.name, personaje.image, personaje.house))
//     })

// })



// Con createElement 
const main = document.querySelector('main');

fetch('https://hp-api.herokuapp.com/api/characters')
.then(response => response.json())
.then(
    personajes => {
        personajes.forEach(personaje => {
            let infoPersonaje = document.createElement('article');
            infoPersonaje.innerHTML = htmlPersonajes(personaje.name, personaje.image, personaje.house);
            main.appendChild(infoPersonaje);
            
        });
    }


)






function htmlPersonajes(personaje, foto, casa){
    let html = `<h2 class="nombre"> ${personaje}</h2>
    <h3> ${casa} </h3>
    <div class= "imagen">
    <img src="${foto}" alt="foto ${personaje}"> </div>`;
    
    return html;


}