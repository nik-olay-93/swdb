import NavBar from 'src/components/NavBar/NavBar'

type NavBarLayoutProps = {
  children?: React.ReactNode
}

const NavBarLayout = ({ children }: NavBarLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default NavBarLayout
