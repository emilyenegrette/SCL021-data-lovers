function login(){
  alert('Welcome to Wizardly!');
} 

document.getElementById("login").addEventListener("click", login)

import data from './data/harrypotter/data.js';

const dataHarryPotter = data.characters;
document.getElementById('characters-container').innerHTML = dataHarryPotter.map(e => `<div>${e.name} - ${e.species} - ${e.house}</div>`).join(' ')

/*function myFilter(){
  var results = dataHarryPotter.filter(e => e.species === "Human")
  document.getElementById('characters-container').innerHTML = results.map(e=> `<div>${e.name} - ${e.species} - ${e.house}</div>`).join(' ')

}

document.getElementById("filtro").addEventListener("click", myFilter)*/

function harrySpecies(){
  var results = dataHarryPotter.filter(e => e.species === "Human" ? e.species === this.value : e.species !== "Human")
  document.getElementById('characters-container').innerHTML = results.map(e => `<div class="card">${e.name} - ${e.species}</div>`).join(' ')

}
document.getElementById("species-select").addEventListener("change", harrySpecies, false)

function filterHouses(){
  var results = dataHarryPotter.filter(e => e.house === this.value)
  document.getElementById('characters-container').innerHTML = results.map(e=> `<div class="card">${e.name} - ${e.house} </div>`).join(' ')

}

document.getElementById("houses-select").addEventListener("change", filterHouses, false)

 //funcion de filtrado alfabeticamente

 function sortAtoZ(){
  const orderName = document.getElementById('orderAZ');
  const typeSelected = orderName.value;

  if(typeSelected === "a-z"){
      var result = dataHarryPotter.sort((a, b) => (a.name > b.name ? 1 : -1));
      document.getElementById("characters-container").innerHTML = result.map(e => `<div class="card">${e.name} - ${e.gender}<br>${e.house}</div>`).join(" ")
  } else if (typeSelected === 'z-a') {
      var result = dataHarryPotter.sort((a, b) => (a.name > b.name ? -1 : 1));
      document.getElementById("characters-container").innerHTML = result.map(e => `<div class="card">${e.name} - ${e.gender}<br>${e.house}</div>`).join(" ")
  }
}
document.getElementById("orderAZ").addEventListener("change", sortAtoZ,false)



/*function sortingCharacters(){
   var sortCharacters = data.characters.sort(e => e.characters === this.value ? e.characters !== characters)
  document.getElementById("selectSort").addEventListener("change", sortCharacters, false)

  }

const sortCharacters = newFunction();
sortCharacters.sort(fuction (a, b){return b - a});

document.getElementById("selectSort").addEventListener("change", sortCharacters, false)

function newFunction() {
  const newLocal = [data.characters];
  const sortCharacters = newLocal;
  return sortCharacters;
}
  let sortCharacters = document.getElementById("selectSort");
sortCharacters.addEventListener('change', function () {
    let valueSort = sortCharacters.value;

        if (valueSort === "A_Z") { // Ordena alfabéticamente de A a Z
            let infoSort = all.sortAZ(dataHarryPotter);
            sortCharacters(infoSort);
        }
        if (valueSort === "Z_A") { // Ordena alfabéticamente de Z a A
            let infoSortR = all.sortZA(dataHarryPotter);
            showCharacters(infoSortR);
        }
});

*/
// AUN NO SE HA TRABAJADO 
//parte de exportado
/*export const sortAZ = (data) => {
  let sortedData=[];
  sortedData = data.sort((a,b) => {
      return a.title.localeCompare(b.title);
  });
  return sortedData;
}

export const sortZA = (data) => {
  let sortedRev=[];
  sortedRev = data.sort((a,b) => {
      return b.title.localeCompare(a.title);
  });
  return sortedRev;
} */

//para entender estructura html
//<div class="filterandsort-section" id="filterandsort-section" style="display: none">
//<select name="Sortby" id="selectSort">
//<option value="default">Sort By</option>
//<option value="A_Z">A-Z</option>
//<option value="Z_A">Z-A</option>
//</select>
//</div>



/* //funcion para mostrar el buscador
function show_research(){

  bars_search.style.top = "80px";
  cover_ctn_search.style.display = "block";
  inputSearch.focus();

  if (inputSearch.value === ""){
    box_search.style.display = "none";
  }
}

//funcion para ocultar buscador
function hidde_search(){
  bars_search.style.top = "-10px";
  cover_ctn_search.style.display = "none";
  inputSearch.value = "";
  box_search.style.display ="none";un


}

//creando filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", charactersSearch);
inputSearch = document.getElementById("input-search")

function charactersSearch(){
  filterSearch = inputSearch.value.toUpperCase();
  li = box_search.getElementByTagName("li");
   
  //recorrer elementos de filtrado por "li"
for (i = 0; i < li.length; i++){

  a = li[i].getElementByTagName("a")[0];
  textValue = a.textContent || a.innerText;
  
  if(textValue.toUpperCase().indexOf(filterSearch) > -1){

    li[i].style.display = "";
    box_search.style.display = "block";
    if (inputSearch.value === "")
    box_search.style.display = "none";

  }else{
    li[i].style.display = "none";
  }

}

} */

//search por personajes
/*const charactersSearch = data.characters; 

const charactersSearch = (data) => {
  document.querySelector('#input-search').innerHTML = '';
  data.forEach((dataHarryPotter) => {
    document.querySelector('#input-search').appendChild(DataforCharacter(dataHarryPotter));
  });
}; */












  /*
export const filterData = (data, prop, name) => {
  if (typeof data !== "object" || typeof prop !== "string" || typeof name !== "string") {
    throw new TypeError
  }

  const filter = data.filter(obj => obj[prop] === name)
  return filter;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (typeof data !== "object" || typeof sortBy !== "string" || typeof sortOrder !== "string") {
    throw new TypeError
  }


  const compare = (a, b) => {
    if (isNaN(a[sortBy]) == false) {
      if (parseInt(a[sortBy]) < parseInt(b[sortBy]))
        return -1
      if (parseInt(a[sortBy]) > parseInt(b[sortBy]))
        return 1
      return 0

    } else {
      if (a[sortBy] < b[sortBy])
        return -1
      if (a[sortBy] > b[sortBy])
        return 1
      return 0

    }
  }

  let ascendingList = [...data]
  ascendingList.sort(compare)

  if (sortOrder === "ascending") {
    return ascendingList

  } else {
    let descendingList = ascendingList.reverse()
    return descendingList
  }

}; */
//Import Harry Potter
/*const constante = data;
const characters = data.characters
console.log(characters)

const dataHtml = document.getElementById('data');

dataHtml.innerHTML = characters.map(e => `<div>${e.name}</div>`).join(" ")

const constanteBooks = data.books;


 console.log(constanteBooks) 
//sort
function filterLastToFirst(a,b){
    if(a.id > b.id) {return -1;}
    if(a.id < b.id) {return 1;}
  }

function filterFirstToLast(a,b){
  if(a.id < b.id) {return -1;}
  if(a.id > b.id) {return 1;}
  return 0
}

console.log(constanteBooks.sort(filterLastToFirst))
console.log(constanteBooks.sort(filterFirstToLast))
 console.log(constanteBooks.sort(ordenar)) 
 const root = document.getElementById('root');

  const printBookList = (bookList) => {
  bookList.forEach(constanteBooks => {
    root.innerHTML += `
    <h1>${constanteBooks.title}</h1>
    `
  })
 } 
 const bookMapTitle = constanteBooks.map(books => books.title)
 const bookTitle = [...new Set(bookMapTitle)]
 const arrayBookTitle = Array.from(bookTitle)
  root.innerHTML = arrayBookTitle.map(title => `<option value="">${title}</option>`).join(" ")
 /* root.innerHTML = constanteBooks.map(books => `<select><option>${books.name}</option></select>`) */
/* root.innerHTML = JSON.stringify(books) */
/* root.innerHTML = JSON.stringify(constanteBooks) */

