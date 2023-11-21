import { getMatchingAnimals } from './getMatchingAnimals'

describe('getMatchingAnimals', () => {
  it('should return an empty array if there are no adopters', () => {
    const result = getMatchingAnimals({ adopters: [], animals: [] })
    expect(result).toEqual([])
  })

  it('should return an empty array if there are no animals', () => {
    const result = getMatchingAnimals({
      adopters: [
        {
          id: 1,
          name: 'John',
          registrationDate: new Date('01-01-2020'),
          age: 30,
          favoriteAnimal: 'dog',
          hasKids: false,
        },
      ],
      animals: [],
    })
    expect(result).toEqual([])
  })

  it('should return an empty array if there are no matches', () => {
    const result = getMatchingAnimals({
      adopters: [
        {
          id: 1,
          name: 'John',
          registrationDate: new Date('01-01-2020'),
          age: 30,
          favoriteAnimal: 'dog',
          hasKids: false,
        },
      ],
      animals: [
        {
          id: 1,
          nickname: 'Henk',
          kind: 'cat',
          birthDate: new Date('01-01-2020'),
          dateOfShelterEntry: new Date('01-01-2020'),
          personality: 'friendly',
          allergies: [],
          illnesses: [],
        },
      ],
    })
    expect(result).toEqual([])
  })

  it('should return a match if there is a match', () => {
    const result = getMatchingAnimals({
      adopters: [
        {
          id: 1,
          name: 'John',
          registrationDate: new Date('01-01-2020'),
          age: 30,
          favoriteAnimal: 'dog',
          hasKids: false,
        },
      ],
      animals: [
        {
          id: 1,
          nickname: 'Henk',
          kind: 'dog',
          birthDate: new Date('01-01-2020'),
          dateOfShelterEntry: new Date('01-01-2020'),
          personality: 'friendly',
          allergies: [],
          illnesses: [],
        },
      ],
    })
    expect(result).toEqual([
      {
        animal: {
          id: 1,
          nickname: 'Henk',
          kind: 'dog',
          birthDate: new Date('01-01-2020'),
          dateOfShelterEntry: new Date('01-01-2020'),
          personality: 'friendly',
          allergies: [],
          illnesses: [],
        },
        adopter: {
          id: 1,
          name: 'John',
          registrationDate: new Date('01-01-2020'),
          age: 30,
          favoriteAnimal: 'dog',
          hasKids: false,
        },
        score: 100,
      },
    ])
  })
})
