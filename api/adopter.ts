export async function getAdopters() {
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
