import { calculateMatchScore } from './calculateMatchScore'
import { Animal, Adopter, Match } from '@/types'

const MATCH_SCORE_THRESHOLD = 50

export const getMatchingAnimals = ({
  adopters,
  animals,
}: {
  adopters: Adopter[]
  animals: Animal[]
}): Match[] => {
  const matches: Match[] = []

  animals.forEach((animal) => {
    const adopterScores = adopters.map((adopter) => ({
      adopter,
      score: calculateMatchScore(animal, adopter),
    }))

    if (adopterScores.length === 0) {
      return
    }

    adopterScores.sort(
      (a, b) =>
        b.score - a.score ||
        Number(b.adopter.registrationDate) - Number(a.adopter.registrationDate)
    )

    const bestMatch = adopterScores[0] // The best match is now the first element

    if (bestMatch.score >= MATCH_SCORE_THRESHOLD) {
      matches.push({
        animal,
        adopter: bestMatch.adopter,
        score: bestMatch.score,
      })
    }
  })

  return matches
}
