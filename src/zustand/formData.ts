import photoData from "@/types/photoData";

interface UseFormData {
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
    password: string;
    image: photoData | null;
    title: string;
    category: string;
    price: string;
    quantity: string;
    description: string;
  }
  
  export default UseFormData;