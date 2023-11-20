export async function getAnimals() {
  const res = await fetch('http://localhost:3001/api/animals', {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
