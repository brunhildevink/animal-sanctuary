'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/constants/routes'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="navbar px-0 navbar-expand-lg navbar-light bg-light">
      <ul className="flex flex-row gap-4">
        {Object.values(ROUTES).map((route) => (
          <li key={route}>
            <Link
              href={`/${route}`}
              className={`btn btn normal-case text-xl ${
                pathname === `/${route}` ? 'btn-active' : ''
              }`}
              title={route === '' ? 'home' : route}
            >
              {route === '' ? 'home' : route}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
