import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('http://localhost:5000/products');
  return data;
};

export const useProducts = () => {
  return useQuery('products', fetchProducts);
};
