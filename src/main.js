import data from './data/harrypotter/data.js';
import {harrySpecies} from './data.js'
import {filterHouses} from './data.js'
import {sortAtoZ} from '/data.js'

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
document.getElementById("species-select").addEventListener("change", harrySpecies, false)
 

//funcion para filtrado de casas de hogwarts
document.getElementById("houses-select").addEventListener("change", filterHouses, false)



 //funcion de filtrado alfabeticamente
document.getElementById("orderAZ").addEventListener("change", sortAtoZ,false)


