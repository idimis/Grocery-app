import React from 'react';

// Define the Product interface with required properties
interface Product {
  id: number;
  name: string;
  price: number; // Price per gram
  weight: number; // Weight in grams
  imageUrl: string;
  category: string;
}

// Define the props for the ProductCard component
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: number) => void; // Updated for toggle functionality
  isFavorite: boolean;
  onLike?: () => void; // Optional if you plan to use it
  isLiked?: boolean; // Optional if you plan to use it
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  onLike,   // Destructured optional prop
  isLiked,  // Destructured optional prop
}) => {
  // Calculate the formatted price per kg
  const formattedPrice = (product.price * (product.weight / 1000)).toFixed(2); // Price per kg

  return (
    <div className="border rounded-lg p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>Price: ${formattedPrice} (per kg)</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
      <button
        onClick={() => onToggleFavorite(product.id)}
        className="text-red-500 mt-2"
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      {onLike && (
        <button
          onClick={onLike}
          className={`mt-2 ${isLiked ? 'text-blue-500' : 'text-gray-500'}`}
        >
          {isLiked ? 'Liked' : 'Like'}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
