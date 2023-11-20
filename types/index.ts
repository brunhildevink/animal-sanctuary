export interface Animal {
  id: number
  nickname: string
  kind: string
  personality: string
}

export interface Adopter {
  id: number
  name: string
  favoriteAnimal: string
  hasKids: boolean
}
