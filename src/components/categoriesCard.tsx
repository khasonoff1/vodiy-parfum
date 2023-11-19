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
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="flex flex-col space-y-12">
            <h1 className="text-white text-6xl font-semibold:">Categories: {category.length}</h1>
            <div className="flex flex-wrap -m-4 justify-center">
                <Slider {...settings}>
                    {category.map((categories) => (
                        <Link key={categories?._id} href={"/"}>
                            <div className="">
                                <Image
                                    src={categories?.image?.url}
                                    alt={categories?.name}
                                    fill
                                    className="rounded-full"
                                />
                            </div>
                            <div className="">
                                <p className="text-white">{categories?.name}</p>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default CategoriesCarusel;
