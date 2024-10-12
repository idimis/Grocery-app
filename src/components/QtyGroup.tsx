interface QtyGroupProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
  }
  
  const QtyGroup = ({ quantity, onIncrease, onDecrease }: QtyGroupProps) => {
    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={onDecrease}
          className="px-2 py-1 bg-gray-300 rounded"
          disabled={quantity <= 100}
        >
          -
        </button>
        <span>{quantity}g</span>
        <button onClick={onIncrease} className="px-2 py-1 bg-gray-300 rounded">
          +
        </button>
      </div>
    );
  };
  
  export default QtyGroup;
  