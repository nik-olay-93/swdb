import { Icon } from '@iconify-icon/react'

import { useAuth } from '@redwoodjs/auth'

const NavBar = () => {
  const { currentUser, isAuthenticated, logOut } = useAuth()

  return (
    <div className="m-2 flex flex-row items-center gap-1 rounded-md bg-blue-400 p-2">
      {isAuthenticated && (
        <>
          <span className="ml-auto text-3xl">{currentUser.email}</span>
          <button onClick={logOut}>
            <Icon icon="fluent:sign-out-20-regular" className="text-3xl" />
          </button>
        </>
      )}
    </div>
  )
}

export default NavBar
