import { Toaster } from '@redwoodjs/web/dist/toast'

import NavBar from 'src/components/NavBar/NavBar'

type NavBarLayoutProps = {
  children?: React.ReactNode
}

const NavBarLayout = ({ children }: NavBarLayoutProps) => {
  return (
    <>
      <Toaster />
      <NavBar />
      {children}
    </>
  )
}

export default NavBarLayout
