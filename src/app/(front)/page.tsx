"use client";

import { Fragment } from "react";
import Navbar from "@/components/navbar";
import LatestProducts from "@/components/latestProducts";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import CategoriesCarusel from "@/components/categoriesCard";

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="bg-blue-200">
                <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
                    <Hero />
                    <CategoriesCarusel />
                    <LatestProducts />
                </main>
            </div>
            <Footer />
        </Fragment>
    );
};

export default HomePage;
