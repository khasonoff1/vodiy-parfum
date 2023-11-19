"use client"

import React, { FC, Fragment, useState } from "react"
import Product from "@/types/products"
import Image from "next/image"
import { handleImageError } from "@/utils/imageErrorHandler"

interface Props{
    product: Product,
    fill?: boolean
}

const CustomImage: FC<Props> = ({product, fill}) => {
const [isLoading, setIsloading] = useState(true)
  return (
    <Fragment>
        {fill ? (<Image src={product?.image?.url} alt={product?.title} fill  className={`object-contain duraction-700 ease-in-out group-hover:opacity-75 ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`} onError={(e) => handleImageError(e)}/>) : 
        (<Image src={product?.image?.url} alt={product?.title} fill  className={`object-contain duraction-700 ease-in-out group-hover:opacity-75 ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`} onError={(e) => handleImageError(e)}/>)}
    </Fragment>
  )
}

export default CustomImage