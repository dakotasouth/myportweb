import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex h-16 p-5 place-content-center gap-40 text-2xl">
            <Link href="/">
                Home
            </Link>
            <Link href="/projects">
                Projects
            </Link>            
        </nav>
    )
}

export default NavBar