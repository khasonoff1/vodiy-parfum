import crud from "./crud";
import UniversalData from "@/types/universalData";

const useProducts = crud<UniversalData>("product");

export default useProducts;