// pages/index.tsx
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    pname: string;
    description: string;
}

interface CartItem {
    id: number;
    pid: number;
}

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        // Fetch products from the backend
        axios.get<Product[]>('http://localhost:3001/product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });

        // Fetch cart items from the backend
        axios.get<CartItem[]>('http://localhost:3001/cart')
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });
    }, []);

    const addToCart = (productId: number) => {
        // Add product to cart
        axios.post<CartItem[]>('http://localhost:3001/cart/add', { userId: 1, pid: productId })
            .then(response => {
                // Update cart state
                setCart(response.data);
            })
            .catch(error => {
                console.error('Error adding to cart:', error);
            });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Products</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <div key={product.id} style={{ width: '300px', margin: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <h2 style={{ color: 'blue', marginBottom: '10px' }}>{product.pname}</h2>
                        <p>{product.description}</p>
                        <button
                            onClick={() => addToCart(product.id)}
                            style={{ padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <h1>Cart</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {cart.map(item => (
                    <div key={item.id} style={{ width: '300px', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <p style={{ marginBottom: '5px' }}>Product ID: {item.pid}</p>
                        {/* Add more details here if needed */}
                    </div>
                ))}
                {cart.length === 0 && <p>Your cart is empty.</p>}
            </div>
        </div>
    );
};

export default HomePage;
