import Image from "next/image"
import NavMobile from "./NavMobile"
import Link from "next/link"

const NavBar = () => {
    return (
        <div className="sticky top-0 px-5 lg:px-10 bg-gray-300  z-50">
            <div className="flex flex-row h-20 md:h-16 lg:px-20 justify-between items-center ">
                <div className="w-32 ">
                    <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={200}
                    height={200}
                    />
                </div>
                <div className="hidden lg:block">
                    <div className="w-full flex flex-row text-2xl gap-5">
                        <Link href="#about" className="hover:text-orange-500">About</Link>
                        <Link href="#investment"  className="hover:text-orange-500">Investment</Link>
                        <Link href="#plan"  className="hover:text-orange-500">Plan</Link>
                        <Link href="#gallery"  className="hover:text-orange-500">Gallery</Link>
                        <Link href="#analysis"  className="hover:text-orange-500">Analysis</Link>
                    </div>
                </div>
                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </div>
    )
}

export default NavBar