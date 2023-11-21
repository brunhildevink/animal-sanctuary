import { Animal, Adopter } from '@/types'

const INITIAL_MATCH_SCORE = 100
const MATCH_SCORE_DECREASE = 25
const MATCH_SCORE_NULL = 0
const ADOPTER_AGE_SENIOR = 60
const ADOPTER_AGE_MINOR = 18

export const calculateMatchScore = (
  animal: Animal,
  adopter: Adopter
): number => {
  let matchScore = INITIAL_MATCH_SCORE

  if (adopter.favoriteAnimal && animal.kind !== adopter.favoriteAnimal) {
    matchScore = MATCH_SCORE_NULL

    return matchScore
  }

  if (
    (adopter.age > ADOPTER_AGE_SENIOR && animal.personality === 'active') ||
    (adopter.age < ADOPTER_AGE_MINOR && animal.personality === 'aggressive')
  ) {
    matchScore -= MATCH_SCORE_DECREASE
  }

  if (adopter.hasKids && animal.personality === 'unsociable') {
    matchScore -= MATCH_SCORE_DECREASE
  }

  return matchScore
}
