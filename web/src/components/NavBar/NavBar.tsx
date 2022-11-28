import { Icon } from '@iconify-icon/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes, useLocation } from '@redwoodjs/router'

const NavBar = () => {
  const { currentUser, isAuthenticated, logOut } = useAuth()
  const { pathname } = useLocation()

  const links = [
    {
      route: routes.home(),
      title: 'Список групп',
    },
  ]

  return (
    <div className="m-2 flex flex-row items-center gap-4 rounded-md bg-blue-600 px-[10%]">
      {links.map((l, i) => (
        <Link
          key={i}
          to={l.route}
          className={`mx-2 mt-2 p-2 pb-4 text-xl font-semibold text-white transition-colors ${
            pathname === l.route ? 'rounded-t-md bg-white text-black' : ''
          }`}
        >
          {l.title}
        </Link>
      ))}
      {isAuthenticated && (
        <>
          <span className="ml-auto flex flex-row items-center gap-1 text-xl text-white">
            <Icon icon="fluent:person-20-filled" />
            {currentUser.email}
          </span>
          <button
            onClick={logOut}
            className="flex flex-row items-center text-white"
          >
            <Icon icon="fluent:sign-out-20-regular" className="text-3xl" />
          </button>
        </>
      )}
    </div>
  )
}

export default NavBar
