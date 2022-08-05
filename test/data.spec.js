export {harrySpecies, filterHouses, sortAtoZ} from '../data.js'
//test estructura
const dataHarryPotter = [
        {

        "name": "Harry Potter",
        "species": "Human",
        "gender": "Male",
        "house": "Gryffindor",
         "books_featured_in": [
         1,
         2,
         3,
         4,
         5,
         6,
         7]    
        },
    {
    
        "name": "Euan Abercrombie",
        "species": "Human",
        "gender": "Male",
        "house": "Gryffindor",
        "books_featured_in": [5]
      },
      {

        "name": "Stewart Ackerley",
        "species": "Human",
        "gender": "Male",
        "house": "Ravenclaw",
        "books_featured_in": [4]
      },
      {

        "name": "African prince",
        "species": "Human",
        "gender": "Male",
        "house": null,
        "books_featured_in": [1]
      },
      {

        "name": "Agnes's son",
        "species": "Human",
        "gender": "Male",
        "house": null,
        "books_featured_in": [5]
      },
      {

        "name": "Cornelius Agrippa",
        "species": "Human",
        "gender": "Male",
        "house": null,
        "books_featured_in": [1]
      },
      {
    
        "name": "Albino peacock",
        "species": "Peacock",
        "gender": "Male",
        "house": null,
        "books_featured_in": [7]
      },
      {

        "name": "Arkie Alderton",
        "species": "Human",
        "gender": "Male",
        "house": null,
        "books_featured_in": [7]
      },
      
      {

        "name": "Angus",
        "species": "Human",
        "gender": "Male",
        "house": null,
        "books_featured_in": [1]
      },
      {

        "name": "Aragog",
        "species": "Acromantula",
        "gender": "Male",
        "house": null,
        "books_featured_in": [2, 5, 6, 7]
      },
      {
    
        "name": "Arcus",
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "house": null,
        "books_featured_in": [7]
      },
     {
      "name": "Sirius Black",
      "species": "Human",
      "gender": "Male",
      "house": "Gryffindor",
      "books_featured_in": [1, 3, 4, 5, 6, 7]
    },
     {
      
      "name": "Cedric Diggory",
      "species": "Human",
      "gender": "Male",
      "house": "Hufflepuff",
      "books_featured_in": [3, 4, 5, 6, 7]
    },
    {

      "name": "Ivor Dillonsby",
      "species": "Human",
      "gender": "Male",
      "house": null,
      "books_featured_in": [7]
    },
     {

      "name": "Dobby",
      "species": "House-elf",
      "gender": "Male",
      "house": null,
      "books_featured_in": [2, 3, 4, 5, 6, 7]
    },
     {

      "name": "Severus Snape",
      "species": "Human",
      "gender": "Male",
      "house": "Slytherin",
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    {
     
      "name": "Fred Weasley",
      "species": "Human",
      "gender": "Male",
      "house": "Gryffindor",
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    {
    
      "name": "George Weasley",
      "species": "Human",
      "gender": "Male",
      "house": "Gryffindor",
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
     
    ]
        //test de sort
    describe('sortAtoZ debería ser una función de ordenado de la A a la Z', () => {
    it('debería ser una función', () => {
      expect(typeof sortAtoZ).toBe('function');
    });
  
    it('Debería ordenar los personajes en orden alfabético ', () => {
      let resultado = scrollTo (dataHarryPotter, sortAtoZ)
      expect(resultado[0].name).toBe("Aberforth Dumbledore");
      expect(resultado[1].name).toBe("Abraxas Malfoy");
      expect(resultado[2].name).toBe("Adalbert Waffling");
      expect(resultado[3].name).toBe("Adrian Pucey");
      expect(resultado[4].name).toBe("African prince");
      expect(resultado[5].name).toBe("Agatha Timms"); 
  });
  }); 

    it("Debería ordenar los personajes en orden alfabético inverso", () => {
      let resultado = sortAtoZ(dataHarryPotter, sortAtoZ);
      expect(resultado[0].name).toBe("Zoo director");
      expect(resultado[1].name).toBe("Zacharias Smith's father");
      expect(resultado[2].name).toBe("Zacharias Smith");
      expect(resultado[3].name).toBe("Z. Nettles");
      expect(resultado[4].name).toBe("Yvonne");
      expect(resultado[5].name).toBe("Xenophilius Lovegood");
    });
  
  //test de species
  describe(harrySpecies, () => {
    it("is a function", () => {
      expect(typeof harrySpecies).toBe("function");
    });
  
    it("return species: human", () => {
      let resultado = harrySpecies(dataHarryPotter, "Aberforth Dumbledore");
      expect(resultado[0].species).toBe("Human");
    });
    it("return species: magical", () => {
        let resultado = harrySpecies(dataHarryPotter, "Albino peacock");
        expect(resultado[1].species).toBe("Peacock");
      });
  });
  

  //test de houses
  describe(filterHouses, () => {
    it("is a function", () => {
      expect(typeof filterHouses).toBe("function");
    });
  
    it("return only Gryffindor", () => {
      let resultado = filterHouses(dataHarryPotter, "Albus Dumbledore");
      expect(resultado[0].house).toBe("Gryffindor");
    });
    it("Return only Slytherin", () => {
        let resultado = filterHouses(dataHarryPotter, "Abraxas Malfoy");
        expect(resultado[0].house).toBe("Slytherin");
      });
      it("Return only Hufflepuff", () => {
        let resultado = filterHouses(dataHarryPotter, "Cadwallader");
        expect(resultado[0].house).toBe("Hufflepuff");
      });
      it("Return only Ravenclaw", () => {
        let resultado = filterHouses(dataHarryPotter, "Anthony Goldstein");
        expect(resultado[0].house).toBe("Ravenclaw");
      });
  });
