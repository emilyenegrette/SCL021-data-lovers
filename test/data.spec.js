import {sortAtoZ, sortZtoA, filterGryffindor, filterHufflepuff, filterRavenclaw, filterSlytherin, filterHuman, filterMagical} from '../src/data.js';


//test estructura

    const dataHarryPotter = [
      {
        "name": "George Weasley",
        "species": "Human",
        "gender": "Male",
        "house": "Gryffindor",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Dobby",
        "species": "House-elf",
        "gender": "Male",
        "house": null,
        "books_featured_in": [2, 3, 4, 5, 6, 7]
      },
      {
        "name": "Cedric Diggory",
        "species": "Human",
        "gender": "Male",
        "house": "Hufflepuff",
        "books_featured_in": [3, 4, 5, 6, 7]
      },
      {
        "name": "Harry Potter",
        "species": "Human",
        "gender": "Male",
        "house": "Gryffindor",
         "books_featured_in": [1, 2, 3, 4, 5, 6, 7]    
        },
        {
          "name": "Luna Lovegood",
          "species": "Human",
          "gender": "Female",
          "house": "Ravenclaw",
          "books_featured_in": [4, 5, 6, 7]
        },
        {
          "name": "Mafalda",
          "species": "Human",
          "gender": "Female",
          "house": "Slytherin",
          "books_featured_in": [4]
        },
        {
          "name": "Sirius Black",
          "species": "Human",
          "gender": "Male",
          "house": "Gryffindor",
          "books_featured_in": [1, 3, 4, 5, 6, 7]
        },
    ]

        //test de sort ordenado

        const orderNames = [
           
            {
              "name": "Cedric Diggory",
              "species": "Human",
              "gender": "Male",
              "house": "Hufflepuff",
              "books_featured_in": [3, 4, 5, 6, 7]
            },
            {
              "name": "Dobby",
              "species": "House-elf",
              "gender": "Male",
              "house": null,
              "books_featured_in": [2, 3, 4, 5, 6, 7]
            },
            {
              "name": "George Weasley",
              "species": "Human",
              "gender": "Male",
              "house": "Gryffindor",
              "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
            },
            {
              "name": "Harry Potter",
              "species": "Human",
              "gender": "Male",
              "house": "Gryffindor",
               "books_featured_in": [1, 2, 3, 4, 5, 6, 7]    
              },
              {
                "name": "Luna Lovegood",
                "species": "Human",
                "gender": "Female",
                "house": "Ravenclaw",
                "books_featured_in": [4, 5, 6, 7]
              },
              {
                "name": "Mafalda",
                "species": "Human",
                "gender": "Female",
                "house": "Slytherin",
                "books_featured_in": [4]
              },
              {
                "name": "Sirius Black",
                "species": "Human",
                "gender": "Male",
                "house": "Gryffindor",
                "books_featured_in": [1, 3, 4, 5, 6, 7]
              },
          ]
    
        //test de sort inverso

        const reverseNames = [
          {
            "name": "Sirius Black",
            "species": "Human",
            "gender": "Male",
            "house": "Gryffindor",
            "books_featured_in": [1, 3, 4, 5, 6, 7]
          },
          {
            "name": "Mafalda",
            "species": "Human",
            "gender": "Female",
            "house": "Slytherin",
            "books_featured_in": [4]
          },
          {
            "name": "Luna Lovegood",
            "species": "Human",
            "gender": "Female",
            "house": "Ravenclaw",
            "books_featured_in": [4, 5, 6, 7]
          },
          {
            "name": "Harry Potter",
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
            {
              "name": "Dobby",
              "species": "House-elf",
              "gender": "Male",
              "house": null,
              "books_featured_in": [2, 3, 4, 5, 6, 7]
            },
            {
              "name": "Cedric Diggory",
              "species": "Human",
              "gender": "Male",
              "house": "Hufflepuff",
              "books_featured_in": [3, 4, 5, 6, 7]
            },
        ]

        describe('sortZtoA', () => {
          it('is a function', () => {
            expect(typeof sortZtoA).toBe('function');
          });
          it('Debería retornar un array con todos los elementos ordenados de la z a la a.', () => {
            expect(sortZtoA(dataHarryPotter, 'z-a')).toEqual(reverseNames);
          });
        });

        describe('sortAtoZ', () => {
          it('is a function', () => {
            expect(typeof sortAtoZ).toBe('function');
          });
          it('Deberia retornar un array con todos los elementos ordenados de la a a la z.',() => {
            expect(sortAtoZ(dataHarryPotter, 'a-z')).toEqual(orderNames);
          }); 
        });

          //cont para hacer test species
            const humanForTest = [
          {
            "name": "Cedric Diggory",
            "species": "Human",
            "gender": "Male",
            "house": "Hufflepuff",
            "books_featured_in": [3, 4, 5, 6, 7]
          },
          {
            "name": "George Weasley",
            "species": "Human",
            "gender": "Male",
            "house": "Gryffindor",
            "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
          },
          {
            "name": "Harry Potter",
            "species": "Human",
            "gender": "Male",
            "house": "Gryffindor",
             "books_featured_in": [1, 2, 3, 4, 5, 6, 7]    
          },
          {
            "name": "Luna Lovegood",
            "species": "Human",
            "gender": "Female",
            "house": "Ravenclaw",
            "books_featured_in": [4, 5, 6, 7]
          },
          {
            "name": "Mafalda",
            "species": "Human",
            "gender": "Female",
            "house": "Slytherin",
            "books_featured_in": [4]
          },
            {
              "name": "Sirius Black",
              "species": "Human",
              "gender": "Male",
              "house": "Gryffindor",
              "books_featured_in": [1, 3, 4, 5, 6, 7]
            },
          ]

          //const para species

          const speciesForTest = [
            {
              "name": "Dobby",
              "species": "House-elf",
              "gender": "Male",
              "house": null,
              "books_featured_in": [2, 3, 4, 5, 6, 7]
            },
          ]

  //function species

          describe('filterHuman', () => {
          it('is a function', () => {
            expect(typeof filterHuman).toBe('function');
          });
          it('Debería retornar un array con todos los personajes humanos', () => {
            expect(filterHuman(dataHarryPotter, 'Human')).toEqual(humanForTest);
          });
        });

        describe('filterMagical', () => {
          it('is a function', () => {
            expect(typeof filterMagical).toBe('function');
          });
          it('Deberia retornar un array con todos los personajes magicos',() => {
            expect(filterMagical(dataHarryPotter, 'Magical')).toEqual(speciesForTest);
          }); 
        });
  
  //const para hacer test de houses

        const gryffindorForTest = [
          {
            "name": "George Weasley",
            "species": "Human",
            "gender": "Male",
            "house": "Gryffindor",
            "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
          },
          {
            "name": "Harry Potter",
            "species": "Human",
            "gender": "Male",
            "house": "Gryffindor",
             "books_featured_in": [1, 2, 3, 4, 5, 6, 7]    
            },
            {
              "name": "Sirius Black",
              "species": "Human",
              "gender": "Male",
              "house": "Gryffindor",
              "books_featured_in": [1, 3, 4, 5, 6, 7]
            },
        ]


        const slytherinForTest = [
            {
              "name": "Mafalda",
              "species": "Human",
              "gender": "Female",
              "house": "Slytherin",
              "books_featured_in": [4]
            },
        ]

        const hufflepuffForTest = [
            {
              "name": "Cedric Diggory",
              "species": "Human",
              "gender": "Male",
              "house": "Hufflepuff",
              "books_featured_in": [3, 4, 5, 6, 7]
            },
        ]

        const ravenclawForTest = [
          {
            "name": "Luna Lovegood",
            "species": "Human",
            "gender": "Female",
            "house": "Ravenclaw",
            "books_featured_in": [4, 5, 6, 7]
          },
        ]
  //test de houses

        describe('filterGryffindor', () => {
        it('is a function', () => {
        expect(typeof filterGryffindor).toBe('function');
      });
        it('Debería retornar un array con todos los personajes de Gryffindor', () => {
        expect(filterGryffindor(dataHarryPotter, 'Gryffindor')).toEqual(gryffindorForTest);
      });
    });

        describe('filterSlytherin', () => {
        it('is a function', () => {
        expect(typeof filterSlytherin).toBe('function');
      });
      it('Debería retornar un array con todos los personajes de Slytherin',() => {
      expect(filterSlytherin(dataHarryPotter, 'Slytherin')).toEqual(slytherinForTest);
      }); 
    });

        describe('filterHufflepuff', () => {
        it('is a function', () => {
        expect(typeof filterHufflepuff).toBe('function');
      });
        it('Debería retornar un array con todos los personajes de Hufflepuff', () => {
        expect(filterHufflepuff(dataHarryPotter, 'Hufflepuff')).toEqual(hufflepuffForTest);
      });
    });

        describe('filterRavenclaw', () => {
        it('is a function', () => {
        expect(typeof filterRavenclaw).toBe('function');
      });
      it('Debería retornar un array con todos los personajes de Ravenclaw',() => {
      expect(filterRavenclaw(dataHarryPotter, 'Ravenclaw')).toEqual(ravenclawForTest);
      }); 
    });

