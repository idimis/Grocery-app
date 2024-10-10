import useFavorite from '../../hooks/useFavorite';

const ProductCard = ({ product }) => {
  const favoriteMutation = useFavorite();

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => favoriteMutation.mutate({ productId: product.id })}>
        ❤️
      </button>
    </div>
  );
};

export default ProductCard;
