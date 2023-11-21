import { getAdopters } from '@/api/adopter'
import { getAnimals } from '@/api/animals'
import { getMatchingAnimals } from '@/utils/getMatchingAnimals'
import { formatDate, calculateAge } from '@/utils/formatDate'

const Page = async () => {
  const adopters = await getAdopters()
  const animals = await getAnimals()
  const matches = getMatchingAnimals({ animals, adopters })

  return (
    <div>
      <h1 className="text-3xl mb-4">Adoption matches</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {matches.map(({ adopter, animal, score }) => (
          <li key={animal.id} className="card bg-neutral shadow-md p-4">
            <div className="card-body grid grid-cols-2">
              <div className="flex flex-col gap-2">
                <h2 className="card-title">{animal.nickname}</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-sm badge-accent">
                    {animal.kind}
                  </span>
                  <span className="badge badge-sm badge-ghost">
                    {animal.personality}
                  </span>
                  <span className="badge badge-sm badge-ghost">
                    entry: {formatDate(animal.dateOfShelterEntry)}
                  </span>
                  <span className="badge badge-sm badge-ghost">
                    age:{' '}
                    {animal.birthDate &&
                      calculateAge(new Date(animal.birthDate))}
                  </span>
                  {animal.illnesses.map((illness) => (
                    <span key={illness} className="badge badge-sm badge-ghost">
                      Illness: {illness}
                    </span>
                  ))}
                  {animal.allergies.map((allergy) => (
                    <span key={allergy} className="badge badge-sm badge-ghost">
                      Allergy: {allergy}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="card-title">Matching with {adopter.name}</h2>
                <div
                  className="radial-progress text-primary"
                  style={
                    {
                      '--value': `${score}`,
                      '--size': '4rem',
                    } as React.CSSProperties
                  }
                  role="progressbar"
                >
                  <b>{score}</b>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
