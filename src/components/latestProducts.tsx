"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CustomImage from "./image";
import useProducts from "@/zustand";

const LatestProducts = () => {
    const { latestProducts: lastProducts, getLatestProducts, loading } = useProducts();
    useEffect(() => {
        getLatestProducts();
    }, [getLatestProducts]);
    return (
        <section className="flex flex-col space-y-12">
            <h1 className="text-white text-6xl font-semibold:">
                Latest Products: {lastProducts.length}
            </h1>
            <div className="flex flex-wrap -m-4 justify-center">
                {lastProducts.map((product) => (
                    <Link
                        key={product?._id}
                        href={"all-products"}
                        className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="h-80 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-500 border-2 border-blue-950 bg-blue-300">
                            <div className="relative max-h-80 flex item-center justify-center rounded w-full mb-6 flex-1">
                                <CustomImage product={product} fill />
                            </div>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                qoldi: {product?.quantity}
                            </h3>
                            <div className="flex items-center justify-center mt-4 mb-1 font-semibold">
                                <p className="w-44 truncate">{product?.title}</p>
                                <p>${product?.price}</p>
                            </div>
                            <p className="leading-relaxed text-gray-900 text-base">
                                sotildi: {product?.sold}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default LatestProducts;
