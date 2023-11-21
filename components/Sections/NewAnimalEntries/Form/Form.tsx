'use client'

import { Animal } from '@/types'
import { PERSONALITIES, KINDS } from '@/constants/animal'

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
    <li className="card bg-neutral shadow-md col-start-1 lg:col-end-3 xl:col-end-4">
      <div className="card-body">
        <div className="flex flex-col gap-2">
          <h2 className="card-title">Add a new animal</h2>
          <form onSubmit={handleUpdateAnimals}>
            <div className="grid grid-cols-3 mt-8">
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="nickname" className="col cols-2">
                    Nickname
                    <br />
                    <input
                      type="text"
                      id="nickname"
                      className="input input-bordered w-full max-w-xs mt-2"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="kind">
                    Kind
                    <br />
                    <select
                      id="kind"
                      className="select select-bordered w-full max-w-xs mt-2"
                    >
                      {KINDS.map((kind) => (
                        <option key={kind}>{kind}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div>
                  <label htmlFor="personality">
                    Personality
                    <br />
                    <select
                      id="personality"
                      className="select select-bordered w-full max-w-xs mt-2"
                    >
                      {PERSONALITIES.map((personality) => (
                        <option key={personality}>{personality}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="birthDate">
                    Date of birth
                    <br />
                    <input
                      type="date"
                      id="birthDate"
                      className="input input-bordered w-full max-w-xs mt-2"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="illnesses">
                    Illnesses
                    <br />
                    <input
                      type="text"
                      id="illnesses"
                      className="input input-bordered w-full max-w-xs mt-2"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="allergies">
                    Allergies
                    <br />
                    <input
                      type="text"
                      id="allergies"
                      className="input input-bordered w-full max-w-xs mt-2"
                    />
                  </label>
                </div>
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-min mt-8"
            />
          </form>
        </div>
      </div>
    </li>
  )
}
