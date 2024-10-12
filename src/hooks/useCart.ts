import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { CartItem } from '../types/cart'; 


const fetchCart = async (): Promise<CartItem[]> => {
  const { data } = await axios.get('http://localhost:5000/cart');
  return data as CartItem[]; 
};


const updateCart = async (newCart: CartItem[]) => {
  await axios.put('http://localhost:5000/cart', newCart);
};


export const useCart = () => {
  const queryClient = useQueryClient();

  const cartQuery = useQuery<CartItem[]>('cart', fetchCart); 

  const mutation = useMutation(updateCart, {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  });

  return { cartQuery, mutation };
};
