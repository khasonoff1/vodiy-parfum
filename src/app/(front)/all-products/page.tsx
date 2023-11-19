import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Fragment } from "react";

const AllProductsPage = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="bg-blue-200">
                <main className="pt-20 min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
                    <div className="relative sm:w-64 sm:mr-4 mr-2">
                        <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">
                            Search
                        </label>
                        <input
                            type="text"
                            id="footer-field"
                            name="footer-field"
                            className="w-96 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </main>
            </div>
            <Footer />
        </Fragment>
    );
};

export default AllProductsPage;
