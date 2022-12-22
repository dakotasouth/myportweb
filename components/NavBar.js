import navStyles from '../styles/NavBar.module.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/">
        Home
      </Link>
      <Link href="/">
        About
      </Link>
      <Link href="/projects">
        Projects
      </Link>
    </nav>
  )
}

export default NavBar