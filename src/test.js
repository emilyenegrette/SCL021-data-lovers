import {harrySpecies, filterHouses, sortAtoZ} from './data.js'

//const dataHarryPotter = [
       /* {
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
        "name": "Antioch Peverell's killer",
        "species": "Human",
        "gender": "Male",
        "books_featured_in": [7]
      },
      {
        "id": 10,
        "name": "Apothecary shopkeeper",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": null,
hite",
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Apothecary"],
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
        "associated_groups": [],
        "books_featured_in": [7]
      },
      {
        "id": 13,
        "name": "Arkie Alderton's alleged son",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": "Muggle-born or half-blood",
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Alderton family"],
        "books_featured_in": [7]
      },
      {
        "id": 14,
        "name": "Armenian warlock",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": [],
        "books_featured_in": [2]
      },
      {
        "id": 15,
        "name": "Arnold",
        "birth": "c. 1996",
        "death": null,
        "species": "Pygmy Puff",
        "ancestry": null,
        "gender": "Male",
        "hair_color": "Purple",
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Ginny Weasley"],
        "books_featured_in": [6]
      },
      {
        "id": 16,
        "name": "Bertram Aubrey",
        "birth": "c. 1950s - 1960s, Great Britain or Ireland",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Hogwarts School of Witchcraft and Wizardry"],
        "books_featured_in": [6]
      },
      {
        "id": 17,
        "name": "Avery I",
        "birth": "Between 1926 and 1932",
        "death": null,
        "species": "Human",
        "ancestry": "Pure-blood or Half-blood (likely)",
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": "Slytherin",
        "associated_groups": [
          "Avery family",
          "Hogwarts School of Witchcraft and Wizardry",
          "Slytherin",
          "Tom Riddle's gang",
          "Slug Club"
        ],
        "books_featured_in": [6]
      },
      {
        "id": 18,
        "name": "Avery II",
        "birth": "Late 1950s or early 1960s, Great Britain or Ireland",
        "death": null,
        "species": "Human",
        "ancestry": "Pure-blood or Half-blood",
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": "None",
        "house": "Slytherin",
        "associated_groups": [
          "Avery family",
          "Hogwarts School of Witchcraft and Wizardry",
          "Slytherin",
          "Death Eaters",
          "Lord Voldemort"
        ],
        "books_featured_in": [4, 5, 6, 7]
      },
     
    ]
        
        /*
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "title": "Howl's Moving Castle",
    "release_date": "2004",
    "rt_score": "87",
    },
    {
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "title": "Kiki's Delivery Service",
    "release_date": "1989",
    "rt_score":"96",
    },
    {
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
    "title": "The Cat Returns",
    "release_date": "2002",
    "rt_score": "89",
    },
    {
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
    "title": "Tales from Earthsea",
    "release_date": "2006",
    "rt_score": "41",
    },
    {
    "director": "Laboratoria",
    "producer": "Marcia",
    "title": "I'm Not a Movie",
    "release_date": "2022",
    "rt_score": "13",
    },
    ]
  
*/
/*describe('sortAtoZ return elementos ordenados alfabéticamente de la A a la Z', () => {
    it('is a function', () => {
      expect(typeof sortAtoZ).toBe('function');
    });
  
    it('Debería retornar las películas en orden alfabético', () => {
      let resultado = scrollTo (allCharacters, sortAtoZ)
      expect(resultado[0].title).toBe("Howl's Moving Castle");
      expect(resultado[1].title).toBe("I'm Not a Movie");
      expect(resultado[2].title).toBe("Kiki's Delivery Service");
      expect(resultado[3].title).toBe("My Neighbors the Yamadas");
      expect(resultado[4].title).toBe("Tales from Earthsea");
      expect(resultado[5].title).toBe("The Cat Returns"); 
  });
  }); */
