import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Fragment } from "react";

const AllProductsPage = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="bg-blue-200">
                <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0"></main>
            </div>
            <Footer />
        </Fragment>
    );
};

export default AllProductsPage;
