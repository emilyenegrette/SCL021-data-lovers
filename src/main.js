import data from './data/harrypotter/data.js';
import {filterHuman, filterMagical, filterGryffindor, filterSlytherin, filterHufflepuff, filterRavenclaw, sortAtoZ, sortZtoA} from './data.js'

function login(){
  alert(`Welcome to Wizardly!
  
We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.

Term begins on 1 September. We await your owl by no later than 31 July.

Yours sincerely,

Minerva McGonagall
Deputy Headmistress`);

} 

document.getElementById("login").addEventListener("click", login)

//estructura en characters.html
const dataHarryPotter = data.characters;
document.getElementById('characters-container').innerHTML = dataHarryPotter.map(e => `
<div class="card">
  <div class="img-houses ${e.house}"></div>
  <ul>
    <li>Name: ${e.name}</li>
    <li>Gender: ${e.gender}</li>
    <li>House: ${e.house}</li>
    <li>Books Featured: ${e.books_featured_in}</li>
    <li>Species: ${e.species}</li>
  </ul>
</div>
`).join(' ')


//funcion para filtrado de especie humana y magica
document.getElementById("species-select").addEventListener("change", () => {
  const orderName = document.getElementById('species-select');
  const typeSelected = orderName.value;
   if(typeSelected === 'Human'){
     var results7 = filterHuman(dataHarryPotter)
     document.getElementById('characters-container').innerHTML = results7.map(e=>  `
     <div class="card">
       <div class="img-houses ${e.house}"></div>
       <ul>
         <li>Name: ${e.name}</li>
         <li>Gender: ${e.gender}</li>
         <li>House: ${e.house}</li>
         <li>Books Featured: ${e.books_featured_in}</li>
         <li>Species: ${e.species}</li>
       </ul>
     </div>
     `).join(' ')
   } else if (typeSelected === 'Magical') {
     var results8 = filterMagical(dataHarryPotter)
     document.getElementById('characters-container').innerHTML = results8.map(e=>  `
     <div class="card">
       <div class="img-houses ${e.house}"></div>
       <ul>
         <li>Name: ${e.name}</li>
         <li>Gender: ${e.gender}</li>
         <li>House: ${e.house}</li>
         <li>Books Featured: ${e.books_featured_in}</li>
         <li>Species: ${e.species}</li>
       </ul>
     </div>
     `).join(' ')
   }
 }, false)
 
document.getElementById("houses-select").addEventListener("change", () => {
 const orderName = document.getElementById('houses-select');
 const typeSelected = orderName.value;
  if(typeSelected === 'Gryffindor'){
    var results2 = filterGryffindor(dataHarryPotter)
    document.getElementById('characters-container').innerHTML = results2.map(e=>  `
    <div class="card">
      <div class="img-houses ${e.house}"></div>
      <ul>
        <li>Name: ${e.name}</li>
        <li>Gender: ${e.gender}</li>
        <li>House: ${e.house}</li>
        <li>Books Featured: ${e.books_featured_in}</li>
        <li>Species: ${e.species}</li>
      </ul>
    </div>
    `).join(' ')
  } else if (typeSelected === 'Slytherin') {
    var results4 = filterSlytherin(dataHarryPotter)
    document.getElementById('characters-container').innerHTML = results4.map(e=>  `
    <div class="card">
      <div class="img-houses ${e.house}"></div>
      <ul>
        <li>Name: ${e.name}</li>
        <li>Gender: ${e.gender}</li>
        <li>House: ${e.house}</li>
        <li>Books Featured: ${e.books_featured_in}</li>
        <li>Species: ${e.species}</li>
      </ul>
    </div>
    `).join(' ')
  } else if (typeSelected === 'Hufflepuff') {
    var results5 = filterHufflepuff(dataHarryPotter)
    document.getElementById('characters-container').innerHTML = results5.map(e=>  `
    <div class="card">
      <div class="img-houses ${e.house}"></div>
      <ul>
        <li>Name: ${e.name}</li>
        <li>Gender: ${e.gender}</li>
        <li>House: ${e.house}</li>
        <li>Books Featured: ${e.books_featured_in}</li>
        <li>Species: ${e.species}</li>
      </ul>
    </div>
    `).join(' ')
  } else if (typeSelected === 'Ravenclaw') {
    var results6 = filterRavenclaw(dataHarryPotter)
    document.getElementById('characters-container').innerHTML = results6.map(e=>  `
    <div class="card">
      <div class="img-houses ${e.house}"></div>
      <ul>
        <li>Name: ${e.name}</li>
        <li>Gender: ${e.gender}</li>
        <li>House: ${e.house}</li>
        <li>Books Featured: ${e.books_featured_in}</li>
        <li>Species: ${e.species}</li>
      </ul>
    </div>
    `).join(' ')
  }
}, false)



 //funcion de filtrado alfabeticamente

document.getElementById("orderAZ").addEventListener("change", () => {
 const orderName = document.getElementById('orderAZ');
 const typeSelected = orderName.value;
  if(typeSelected === "a-z"){
    var result = sortAtoZ(dataHarryPotter);
    document.getElementById("characters-container").innerHTML = result.map(e =>  `
    <div class="card">
      <div class="img-houses ${e.house}"></div>
      <ul>
        <li>Name: ${e.name}</li>
        <li>Gender: ${e.gender}</li>
        <li>House: ${e.house}</li>
        <li>Books Featured: ${e.books_featured_in}</li>
        <li>Species: ${e.species}</li>
      </ul>
    </div>
    `).join(' ')
    
} else if (typeSelected === 'z-a') {
    var result3 = sortZtoA(dataHarryPotter);
    document.getElementById("characters-container").innerHTML = result3.map(e =>  `
    <div class="card">
      <div class="img-houses ${e.house}"></div>
      <ul>
        <li>Name: ${e.name}</li>
        <li>Gender: ${e.gender}</li>
        <li>House: ${e.house}</li>
        <li>Books Featured: ${e.books_featured_in}</li>
        <li>Species: ${e.species}</li>
      </ul>
    </div>
    `).join(' ')
}
},false)