import { Animal } from '@/types'
import { getAnimals } from '@/api/animals'

const Page = async () => {
  const animals = await getAnimals()

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl mb-4">Animal List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {animals.map(({ id, nickname, personality, kind }: Animal) => (
          <li key={id} className="card bg-base-100 shadow-md p-4">
            <div className="card-body">
              <h2 className="card-title">{nickname}</h2>
              <div className="flex justify-start gap-2">
                <span className="badge badge-sm badge-accent">{kind}</span>
                <span className="badge badge-sm badge-ghost">
                  {personality}
                </span>
              </div>
              <div className="card-actions my-4">
                <button type="button" className="btn btn-block btn-secondary">
                  Adopt me!
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
