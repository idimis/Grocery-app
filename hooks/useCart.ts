import { useQuery, useMutation, useQueryClient } from 'react-query';
import getCart from '../api/getCart';
import addToCart from '../api/addToCart';  // API untuk tambah produk
import removeFromCart from '../api/removeFromCart'; // API untuk mengurangi produk

const useCart = () => {
  const queryClient = useQueryClient();

  const cartQuery = useQuery('cart', getCart, {
    staleTime: 1000 * 60 * 5,
  });

  const addMutation = useMutation(addToCart, {
    onSuccess: () => {
      queryClient.invalidateQueries('cart'); // Refresh cart data
    },
  });

  const removeMutation = useMutation(removeFromCart, {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  });

  return {
    cartQuery,
    addMutation,
    removeMutation,
  };
};

export default useCart;
