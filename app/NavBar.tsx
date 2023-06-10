import Link from "next/link";
import SignIn from "./SignIn";

const NavBar = () => {
    return (
        <div className="">
            <nav className="block h-16 min-w-0 py-5 m-auto text-2xl text-center max-w-prose font-sfpro">
                <Link className="pr-10" href="/">
                    Home
                </Link>
                <Link className="px-10" href="/projects">
                    Projects
                </Link>
                <Link className="pl-10" href="/blog">
                    Blog
                </Link>
            </nav>
            <div className="fixed top-0 right-0 py-5 pr-5">
                <SignIn/>
            </div>
        </div>
    )
}

export default NavBar