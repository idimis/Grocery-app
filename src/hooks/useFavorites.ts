import { useQuery } from 'react-query';
import axios from 'axios';

const fetchFavorites = async () => {
  const { data } = await axios.get('http://localhost:5000/favorite-products');
  return data;
};

export const useFavorites = () => {
  return useQuery('favorites', fetchFavorites);
};
