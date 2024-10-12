import { Cart } from '@/types/cart';

export const getCart = async (): Promise<Cart> => {
  const response = await fetch('/api/cart');
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
};
