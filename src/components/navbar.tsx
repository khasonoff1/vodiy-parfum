import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import "@/app/globals.css";
import Bars from "@/assets/bars-1.png"

const Navbar = () => {
    return (
        <Fragment>
            <header className="flex items-center justify-between px-4 md:px-12 py-2 fixed top-0 z-40 w-full shadow bg-blue-300">
                <Link href="/">
                    <Image src={Logo} alt="logo" width={50} />
                </Link>
                <div className="header-box flex items-center space-x-2.5 text-sm">
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link
                            href="/all-products"
                            className="font-semibold mr-5 text-white cursor-pointer hover:text-blue-600">
                            All products
                        </Link>
                        <Link
                            href="/favorites"
                            className="font-semibold mr-5 text-white cursor-pointer hover:text-blue-600">
                            Favorites
                        </Link>
                        <Link
                            href="/cart"
                            className="font-semibold mr-5 text-white cursor-pointer hover:text-blue-600">
                            Carts
                        </Link>
                    </nav>
                    <Link
                        href={"/auth/login"}
                        className="button bg-blue-600 text-white border-transparent transition-transform ease-out duration-500 hover:border-blue-600 hover: border-blue-600 hover:bg-transparent hover:text-black hover:scale-125">
                        Log in
                    </Link>
                    <Link
                        href={"/auth/register"}
                        className="button bg-transparent transition-transform duration-500 ease-out text-black border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white hover:scale-125">
                        Sign up
                    </Link>
                </div>
            </header>
            <div className="sm:hidden bars">
                <Image src={Bars} alt="bars z-50" width={50} height={50} />
            </div>
        </Fragment>
    );
};

export default Navbar;
