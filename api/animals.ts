import { Animal } from '@/types'

export async function getAnimals(): Promise<Animal[]> {
  const res = await fetch('http://localhost:3001/api/animals', {
    next: {
      revalidate: 300,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
