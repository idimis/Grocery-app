// src/app/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { getProducts } from '../api/getProducts';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CategoryList from '../components/CategoryList';
import FilterAndSearch from '../components/FilterAndSearch';
import ProductCard from '../components/ProductCard';
import CartList from '../components/CartList';
import { Product } from '../types/product';
import { CartItem } from '../types/cart'; // Assuming CartItem is defined in the same place

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useState<CartItem[]>([]); // Updated type for cart items
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            setProducts(products);
            setFilteredProducts(products);

            const uniqueCategories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
            setCategories(uniqueCategories);
        };
        fetchData();
    }, []);

    const handleAddToCart = (product: Product) => {
        // Check if product already exists in the cart
        const existingCartItem = cart.find(item => item.productId === product.id);

        if (existingCartItem) {
            // If the product exists, update the quantity
            setCart(
                cart.map(item =>
                    item.productId === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // If the product doesn't exist, add it with quantity 1
            const newCartItem: CartItem = {
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: 1, // Default quantity is 1
            };
            setCart([...cart, newCartItem]);
        }
    };

    const handleUpdateQuantity = (productId: number, quantity: number) => {
        setCart(cart.map(item =>
            item.productId === productId ? { ...item, quantity } : item
        ));
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        if (query) {
            setFilteredProducts(
                products.filter(product =>
                    product.name.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            filterByCategory(activeCategory);
        }
    };

    const filterByCategory = (category: string) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    };

    return (
        <div>
            <Header />
            <NavBar />
            <main className="container mx-auto p-4">
                <FilterAndSearch searchQuery={searchQuery} onSearchChange={handleSearchChange} />
                <CategoryList
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryClick={filterByCategory}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => handleAddToCart(product)}
                            onLike={() => { } }
                            isLiked={false} onToggleFavorite={function (productId: number): void {
                                throw new Error('Function not implemented.');
                            } } isFavorite={false}                        />
                    ))}
                </div>
            </main>
            <aside className="fixed bottom-0 right-0 p-4 bg-white shadow-lg">
                <h2 className="text-lg font-bold">Your Cart</h2>
                <CartList cartItems={cart} onUpdateQuantity={handleUpdateQuantity} />
            </aside>
        </div>
    );
};

export default HomePage;
