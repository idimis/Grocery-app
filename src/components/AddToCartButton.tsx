import { useState } from "react";

interface AddToCartButtonProps {
  productId: number;
  onAddToCart: (productId: number, quantity: number) => void;
}

const AddToCartButton = ({ productId, onAddToCart }: AddToCartButtonProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(productId, quantity);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        +
      </button>
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
