export function filterHuman(array){
  const resultsHuman = array.filter(e => e.species === 'Human')
  return resultsHuman
}

export function filterMagical(array){
  const resultsMagical = array.filter(e => e.species !== 'Human') 
  return resultsMagical
}

export function filterGryffindor(array){
  const resultsGryffindor = array.filter(e => e.house === 'Gryffindor')
  return resultsGryffindor
}

export function filterSlytherin(array){
  const resultsSlytherin = array.filter(e => e.house === 'Slytherin')
  return resultsSlytherin
}

export function filterHufflepuff(array){
  const resultsHufflepuff = array.filter(e => e.house === 'Hufflepuff')
  return resultsHufflepuff
}

export function filterRavenclaw(array){
  const resultsRavenclaw = array.filter(e => e.house === 'Ravenclaw')
  return resultsRavenclaw
}

export function sortAtoZ(arr){
  var result = arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  return result
}

export function sortZtoA(arr){
  var result3 = arr.sort((a, b) => (a.name > b.name ? -1 : 1));
  return result3;
}
