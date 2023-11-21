'use client'

import { useState } from 'react'
import { Form } from './Form'
import { Animal } from '@/types'

export const NewAnimalEntries = () => {
  const [animals, setAnimals] = useState<Animal[]>([])

  const handleUpdateAnimals = (animal: Animal) => {
    setAnimals((prevAnimals) => [...prevAnimals, animal])
  }

  return (
    <>
      <Form onSubmit={handleUpdateAnimals} />

      {animals.map(({ id, nickname, kind, personality }) => (
        <li key={id} className="card bg-neutral shadow-md">
          <div className="card-body">
            <div className="flex flex-col gap-2">
              <h2 className="card-title">{nickname}</h2>
              <div className="flex justify-start gap-2">
                <span className="badge badge-sm badge-accent">{kind}</span>
                <span className="badge badge-sm badge-ghost">
                  {personality}
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  )
}
