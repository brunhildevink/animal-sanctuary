import { Adopter, Animal, Kind, Personality } from '@/types'
import { calculateMatchScore } from './calculateMatchScore'

describe('calculateMatchScore', () => {
  const createMockAnimal = (kind: Kind, personality: Personality): Animal => ({
    id: 1,
    nickname: 'Henk',
    birthDate: new Date('01-01-2020'),
    dateOfShelterEntry: new Date('01-01-2020'),
    allergies: [],
    illnesses: [],
    kind,
    personality,
  })
  const createMockAdopter = (
    age: number,
    favoriteAnimal: Kind,
    hasKids: boolean
  ): Adopter => ({
    id: 1,
    name: 'John',
    registrationDate: new Date('01-01-2020'),
    age,
    favoriteAnimal,
    hasKids,
  })

  it('should return initial match score if there are no mismatches', () => {
    const animal = createMockAnimal('dog', 'active')
    const adopter = createMockAdopter(30, 'dog', false)
    const result = calculateMatchScore(animal, adopter)
    expect(result).toBe(100)
  })

  it('should return 0 match score if adopter has a favorite animal and it does not match the animal', () => {
    const animal = createMockAnimal('cat', 'other')
    const adopter = createMockAdopter(25, 'dog', false)
    const result = calculateMatchScore(animal, adopter)
    expect(result).toBe(0)
  })

  it('should decrease match score for active animal if adopter is a senior', () => {
    const animal = createMockAnimal('dog', 'active')
    const adopter = createMockAdopter(65, 'dog', false)
    const result = calculateMatchScore(animal, adopter)
    expect(result).toBe(75)
  })

  it('should decrease match score for aggressive animal if adopter is a minor', () => {
    const animal = createMockAnimal('cat', 'aggressive')
    const adopter = createMockAdopter(16, 'cat', false)
    const result = calculateMatchScore(animal, adopter)
    expect(result).toBe(75)
  })

  it('should decrease match score for unsociable animal if adopter has kids', () => {
    const animal = createMockAnimal('fish', 'unsociable')
    const adopter = createMockAdopter(35, 'fish', true)
    const result = calculateMatchScore(animal, adopter)
    expect(result).toBe(75)
  })
})
