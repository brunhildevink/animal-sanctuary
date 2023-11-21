import { ROUTES } from '@/constants/routes'

const Page = async () => (
  <div>
    <h1 className="text-3xl mb-8">Adoption matches</h1>
    <ul className="grid grid-cols-2 gap-8">
      <li className="card bg-neutral shadow-md p-4">
        <a href={`${ROUTES.ROUTE_OVERVIEW}`}>
          <div className="card-body">
            <h2 className="card-title">Overview</h2>
            <p>
              Get the full overview of adopters and animals that are currently
              in the shelter.
            </p>
          </div>
        </a>
      </li>

      <li className="card bg-neutral shadow-md p-4">
        <a href={`${ROUTES.ROUTE_ADOPTIONS}`}>
          <div className="card-body grid">
            <h2 className="card-title">Adoptions</h2>
            <p>Get the full overview of current matches.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
)

export default Page
