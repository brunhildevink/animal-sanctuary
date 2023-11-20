export async function getAdopter() {
  const res = await fetch('http://localhost:3001/api/adopter', {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
