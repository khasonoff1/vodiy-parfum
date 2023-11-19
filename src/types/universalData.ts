interface UniversalData {
  _id: string;
  title: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  category: {
    name: string;
  };
  image: {
    url: string | undefined;
  };
  createdAt: string;
  sold: number;
  newQuantity: number;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  password: string;
}

export default UniversalData;