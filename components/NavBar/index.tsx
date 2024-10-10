import { useCategory } from '../../context/CategoryContext';

const NavBar = () => {
  const { activeCategory, setActiveCategory } = useCategory();

  const categories = ['all', 'vegetables', 'spicy'];

  return (
    <nav>
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? 'active' : ''}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
