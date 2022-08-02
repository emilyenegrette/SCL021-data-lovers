import data from './data/harrypotter/data.js';

function login(){
  alert(`Welcome to Wizardly!
  
We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.

Term begins on 1 September. We await your owl by no later than 31 July.

Yours sincerely,

Minerva McGonagall
Deputy Headmistress`);

} 

document.getElementById("login").addEventListener("click", login)

//mostrar datos en characters.html
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
function harrySpecies(){
  var results = dataHarryPotter.filter(e => e.species === "Human" ? e.species === this.value : e.species !== "Human")
  document.getElementById('characters-container').innerHTML = results.map(e =>  `
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
document.getElementById("species-select").addEventListener("change", harrySpecies, false)
 
//funcion para filtrado de casas de hogwarts
function filterHouses(){
  var results = dataHarryPotter.filter(e => e.house === this.value)
  document.getElementById('characters-container').innerHTML = results.map(e=>  `
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

document.getElementById("houses-select").addEventListener("change", filterHouses, false)

 //funcion de filtrado alfabeticamente

 function sortAtoZ(){
  const orderName = document.getElementById('orderAZ');
  const typeSelected = orderName.value;

  if(typeSelected === "a-z"){
      var result = dataHarryPotter.sort((a, b) => (a.name > b.name ? 1 : -1));
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
      var result = dataHarryPotter.sort((a, b) => (a.name > b.name ? -1 : 1));
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
      
  }
}
document.getElementById("orderAZ").addEventListener("change", sortAtoZ,false)


