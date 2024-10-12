import { useState } from "react";

interface CategoryListProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const CategoryList = ({ categories, activeCategory, onCategoryClick }: CategoryListProps) => {
  return (
    <div className="flex space-x-4 p-4 border-b">
      {categories.map((category) => (
        <button
          key={category}
          className={`${
            activeCategory === category ? "border-b-2 border-blue-500" : ""
          } pb-2`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
