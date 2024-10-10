import { useMutation, useQueryClient } from 'react-query';
import addFavorite from '../api/addFavorite';

const useFavorite = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries('favoriteProducts');
    },
  });

  return mutation;
};

export default useFavorite;
