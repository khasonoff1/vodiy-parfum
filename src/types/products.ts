interface Product {
    _id: string,
    title: string,
    image: {
        url: string
    },
    sold: number,
    price: number,
    category: {
        name: string
    },
}

export default Product