import React from 'react';
import { CartItem } from '@/types/cart'; // Ensure CartItem type is defined

interface CartListProps {
  cartItems: CartItem[]; // Array of items in the cart
  onUpdateQuantity: (productId: number, quantity: number) => void; // Update quantity
}

const CartList: React.FC<CartListProps> = ({ cartItems, onUpdateQuantity }) => {
  return (
    <ul>
      {cartItems.length === 0 ? (
        <li className="py-2 text-center">Your cart is empty.</li>
      ) : (
        cartItems.map((item: CartItem) => (
          <li key={item.productId} className="flex justify-between items-center border-b py-2">
            <span>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </span>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => onUpdateQuantity(item.productId, parseInt(e.target.value))}
              className="w-12 ml-2 p-1 border rounded"
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default CartList;
