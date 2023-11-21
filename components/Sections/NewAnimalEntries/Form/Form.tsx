'use client'

import { Animal } from '@/types'

interface Props {
  onSubmit: (animal: Animal) => void
}

export const Form = ({ onSubmit }: Props) => {
  const handleUpdateAnimals = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.currentTarget

    const newAnimal: Animal = {
      id: Math.random(),
      nickname: target.nickname.value,
      kind: target.kind.value,
      personality: target.personality.value,
      illnesses: [target.illnesses.value],
      allergies: [target.allergies.value],
      birthDate: new Date(target.birthDate.value),
      dateOfShelterEntry: new Date(),
    }

    onSubmit(newAnimal)
  }

  return (
    <li className="card bg-neutral shadow-md">
      <div className="card-body">
        <div className="flex flex-col gap-2">
          <h2 className="card-title">Add a new animal</h2>
          <form onSubmit={handleUpdateAnimals}>
            <div>
              <label htmlFor="nickname">
                Nickname <input type="text" id="nickname" />
              </label>
            </div>
            <div>
              <label htmlFor="kind">
                Kind <input type="text" id="kind" />
              </label>
            </div>
            <div>
              <label htmlFor="personality">
                Personality <input type="text" id="personality" />
              </label>
            </div>
            <div>
              <label htmlFor="birthDate">
                Date of birth <input type="date" id="birthDate" />
              </label>
            </div>
            <div>
              <label htmlFor="illnesses">
                Illnesses <input type="text" id="illnesses" />
              </label>
            </div>
            <div>
              <label htmlFor="allergies">
                Allergies <input type="text" id="allergies" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </li>
  )
}
