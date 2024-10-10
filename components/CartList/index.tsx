import { useCart } from '@/hooks/useCart';
import { useAddToCart } from '@/hooks/useCart';
import { useState } from 'react';
import { CartItem } from '@/types/cart';

export const CartList = () => {
  const { data: cart, isLoading } = useCart();
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const addToCartMutation = useAddToCart();

  if (isLoading) return <p>Loading cart...</p>;

  const handleIncreaseQty = (item: CartItem) => {
    addToCartMutation.mutate({ productId: item.productId, quantity: item.quantity + 1 });
  };

  const handleDecreaseQty = (item: CartItem) => {
    if (item.quantity > 1) {
      addToCartMutation.mutate({ productId: item.productId, quantity: item.quantity - 1 });
    }
  };

  return (
    <div className="cart-list">
      {cart?.items.map((item) => (
        <div key={item.productId} className="cart-item">
          <span>{item.productName}</span>
          <span>{item.quantity}g</span>
          <div>
            <button onClick={() => handleDecreaseQty(item)}>-</button>
            <button onClick={() => handleIncreaseQty(item)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
