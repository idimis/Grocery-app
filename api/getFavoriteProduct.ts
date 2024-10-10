import { axiosInstance } from '@/lib/utils';
import { Product } from '@/types/product';

export const getFavoriteProduct = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get('/favorites');
  return data;
};
