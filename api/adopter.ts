import { Adopter } from '@/types'

export async function getAdopters(): Promise<Adopter[]> {
  const res = await fetch('http://localhost:3001/api/adopters', {
    next: {
      revalidate: 300,
    },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
