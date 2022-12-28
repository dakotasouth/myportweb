import navStyles from '../styles/NavBar.module.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/">
        Home
      </Link>
      <h3></h3>
      <Link href="/projects">
        Projects
      </Link>
    </nav>
  )
}

export default NavBar