import request from "@/server";
import Product from "@/types/products";
import { create } from "zustand";

interface LastestProductsType {
    loading: boolean;
    latestProducts: Product[];
    getLatestProducts: () => void;
}

const useLastestProducts = create<LastestProductsType>()((set, get) => ({
    loading: false,
    latestProducts: [],
    getLatestProducts: async () => {
        const { data } = await request.get("last-products")
        set({ latestProducts: data })
        try {
            set({loading: true})
        } finally {
            set({loading: false})        
        }
    }
}))

export default useLastestProducts