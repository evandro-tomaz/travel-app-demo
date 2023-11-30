import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="border-2 border-red-500 flexBetween relative z-30 py-5">
            <Link href="/">
                Home
            </Link>
        </nav>
    )
}

export default Navbar