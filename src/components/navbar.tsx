import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import "@/app/globals.css";

const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-4 md:px-12 py-2 fixed top-0 z-50 w-full shadow bg-blue-300">
            <Link href="/">
                <Image src={Logo} alt="logo" width={50} />
            </Link>
            <div className="flex items-center space-x-2.5 text-sm">
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/all-products" className="font-semibold mr-5 text-white cursor-pointer hover:text-blue-600 transition delay-500 duration-300 ease-in-out">
                        All products
                    </Link>
                    <Link href="/favorites" className="font-semibold mr-5 text-white cursor-pointer hover:text-blue-600 transition delay-500 duration-300 ease-in-out">
                        Favorites
                    </Link>
                    <Link href="/cart" className="font-semibold mr-5 text-white cursor-pointer hover:text-blue-600 transition delay-500 duration-300 ease-in-out">
                        Carts
                    </Link>
                </nav>
                <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover: border-blue-600 hover:bg-transparent hover:text-black">Log in</button>
                <button className="button bg-transparent text-black border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white">Sign up</button>
            </div>
        </header>
    );
};

export default Navbar;
