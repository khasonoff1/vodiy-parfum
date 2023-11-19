"use client"

import { useEffect } from "react";
import useLastestProducts from "@/zustand";
import Link from "next/link";
import CustomImage from "./image";

const LatestProducts = () => {
  const { latestProducts: lastProducts , getLatestProducts, loading } = useLastestProducts();
  useEffect(()=>{
    getLatestProducts()
}, [getLatestProducts])
  return (
    <section className="flex flex-col space-y-12">
      <h1 className="text-5xl font-bold:">Latest Products: {}</h1>
      <div className="flex flex-wrap -m-4 justify-center">
        {lastProducts.map((product) => (
          <Link key={product?._id} href={`productoduct/${product?._id}`} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="h-80 flex flex-col bg-gray-100 p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border">
              <div className="relative max-h-60 flex item-center justify-center rounded w-full mb-6 flex-1">
                <CustomImage product={product} fill />
              </div>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product?.category.name}</h3>
                <div className="flex items-center justify-center mt-4 mb-1 font-semibold">
                  <p className="w-44 truncate">{product?.title}</p>
                  <p>${product?.price}</p>
                </div>
                <p className="leading-relaxed text-gray-900 text-base">sotildi: {product?.sold}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default LatestProducts