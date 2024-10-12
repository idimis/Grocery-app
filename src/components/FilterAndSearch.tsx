interface FilterAndSearchProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
  }
  
  const FilterAndSearch = ({ searchQuery, onSearchChange }: FilterAndSearchProps) => {
    return (
      <div className="p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Search products..."
        />
      </div>
    );
  };
  
  export default FilterAndSearch;
  