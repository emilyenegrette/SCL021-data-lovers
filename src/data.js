// estas funciones son de ejemplo
import data from './data/harrypotter/data.js';

const dataHarryPotter = data.characters;

export function harrySpecies(){
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

export function filterHouses(){
  var results2 = dataHarryPotter.filter(e => e.house === this.value)
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
  
}
 
export function sortAtoZ(){
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
      var result3 = dataHarryPotter.sort((a, b) => (a.name > b.name ? -1 : 1));
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
}
