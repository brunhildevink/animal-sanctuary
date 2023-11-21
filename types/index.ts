export type Kind = 'dog' | 'cat' | 'rabbit' | 'bird' | 'fish' | 'other'

export type Personality =
  | 'friendly'
  | 'shy'
  | 'aggressive'
  | 'unsociable'
  | 'active'
  | 'lazy'
  | 'other'

export interface Animal {
  id: number
  nickname: string
  kind: Kind
  personality: Personality
  birthDate: Date
  dateOfShelterEntry: Date
  allergies: string[]
  illnesses: string[]
}

export interface Adopter {
  id: number
  name: string
  age: number
  registrationDate: Date
  favoriteAnimal: Kind
  hasKids: boolean
}

export interface Match {
  animal: Animal
  adopter: Adopter
  score: number
}
