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
  const adoptersList = [...adopters]

  return animals.flatMap((animal) => {
    const adopterScores = adoptersList.map((adopter) => ({
      adopter,
      score: calculateMatchScore(animal, adopter),
    }))

    if (adopterScores.length === 0) {
      return []
    }

    adopterScores.sort(
      (a, b) =>
        b.score - a.score ||
        Number(b.adopter.registrationDate) - Number(a.adopter.registrationDate)
    )

    const bestMatch = adopterScores[0]

    if (bestMatch.score < MATCH_SCORE_THRESHOLD) {
      return []
    }

    const bestMatchIndex = adoptersList.findIndex(
      (adopter) => adopter.id === bestMatch.adopter?.id
    )
    if (bestMatchIndex !== -1) {
      adoptersList.splice(bestMatchIndex, 1)
    }

    return [{ animal, adopter: bestMatch.adopter, score: bestMatch.score }]
  })
}
