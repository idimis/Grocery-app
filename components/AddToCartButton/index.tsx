import useCart from '../../hooks/useCart';

const AddToCartButton = ({ productId }) => {
  const { addMutation } = useCart();

  return (
    <button onClick={() => addMutation.mutate({ productId, quantity: 1 })}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
