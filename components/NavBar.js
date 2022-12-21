import navStyles from '../styles/NavBar.module.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default NavBar