import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="block h-16 min-w-0 py-5 m-auto text-2xl text-center max-w-prose">
            <Link className="pr-10" href="/">
                Home
            </Link>
            <Link className="pl-10" href="/projects">
                Projects
            </Link>            
        </nav>
    )
}

export default NavBar