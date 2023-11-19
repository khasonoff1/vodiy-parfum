"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useGetData from "@/zustand";
import Image from "next/image";
import Slider from "react-slick";

const CategoriesCarusel = () => {
    const { categories: category, getAllCategories, loading } = useGetData();
    useEffect(() => {
        getAllCategories();
    }, [getAllCategories]);
    let settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <section className="flex flex-col space-y-12 mb-20">
            <h1 className="text-white text-6xl font-semibold:">Categories: {category.length}</h1>
            <div className="flex-none">
                <Slider {...settings}>
                    {category.map((categories) => (
                        <Link key={categories?._id} href={"/all-products"}>
                            <div className="relative flex item-center justify-center w-full text-center">
                                <Image
                                    className="category-image transition-transform duration-500 hover:scale-75"
                                    src={categories?.image?.url}
                                    alt={categories?.name}
                                    width={180}
                                    height={180}
                                />
                            </div>
                            <p className="text-center text-xl text-white">{categories?.name}</p>
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default CategoriesCarusel;
