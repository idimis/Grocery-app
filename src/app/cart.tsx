import React from 'react';
import { useCart } from '../hooks/useCart';
import { CartItem } from '@/types/cart'; 
import CartList from '../components/CartList'; 

const Cart: React.FC = () => {
  const { cartQuery, mutation } = useCart();

  if (cartQuery.isLoading) return <p>Loading...</p>;
  if (cartQuery.isError) return <p>Error loading cart</p>;

  const handleRemoveItem = (productId: number) => {
    const updatedCart = cartQuery.data?.filter(item => item.productId !== productId);

    if (updatedCart) {
      mutation.mutate(updatedCart);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      <CartList 
        cartItems={cartQuery.data || []} 
        onRemoveItem={handleRemoveItem} 
      />
      {/* Add button for final cart and shipping logic */}
    </div>
  );
};

export default Cart;
