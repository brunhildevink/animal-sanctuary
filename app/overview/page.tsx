import { getAdopters } from '@/api/adopter'
import { getAnimals } from '@/api/animals'
import { formatDate, calculateAge } from '@/utils/formatDate'
import { NewAnimalEntries } from '@/components/Sections/NewAnimalEntries/NewAnimalEntries'

const Page = async () => {
  const adopters = await getAdopters()
  const animals = await getAnimals()

  return (
    <div>
      <h1 className="text-3xl mb-4">All animals</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        <NewAnimalEntries />
        {animals.map(
          ({
            id,
            nickname,
            kind,
            personality,
            allergies,
            birthDate,
            dateOfShelterEntry,
            illnesses,
          }) => (
            <li key={id} className="card bg-neutral shadow-md">
              <div className="card-body">
                <div className="flex flex-col gap-2">
                  <h2 className="card-title">{nickname}</h2>
                  <div className="flex justify-start gap-2">
                    <span className="badge badge-sm badge-accent">{kind}</span>
                    <span className="badge badge-sm badge-ghost">
                      {personality}
                    </span>
                    <span className="badge badge-sm badge-ghost">
                      entry: {formatDate(dateOfShelterEntry)}
                    </span>
                    <span className="badge badge-sm badge-ghost">
                      age: {birthDate && calculateAge(new Date(birthDate))}
                    </span>
                    {illnesses.map((illness) => (
                      <span
                        key={illness}
                        className="badge badge-sm badge-ghost"
                      >
                        Illness: {illness}
                      </span>
                    ))}
                    {allergies.map((allergy) => (
                      <span
                        key={allergy}
                        className="badge badge-sm badge-ghost"
                      >
                        allergy: {allergy}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>

      <h1 className="text-3xl mb-4 mt-12">All adopters</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {adopters.map(
          ({ id, name, age, registrationDate, favoriteAnimal, hasKids }) => (
            <li key={id} className="card bg-neutral shadow-md">
              <div className="card-body">
                <div className="flex flex-col gap-2">
                  <h2 className="card-title">{name}</h2>
                  <p>Age: {age}</p>
                  <p>Registration date: {formatDate(registrationDate)}</p>
                  <p>Favorite animal: {favoriteAnimal}</p>
                  <p>Kids: {hasKids ? 'yes' : 'no'}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Page
