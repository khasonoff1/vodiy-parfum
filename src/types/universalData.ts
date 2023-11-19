interface UniversalData {
    _id: string;
    title: string;
    name: string;
    price: number;
    image: {
      url: string;
    };
    description: string;
    quantity: number;
    category: string;
    sold: number;
    newQuantity: number;
  }
  
  export default UniversalData;