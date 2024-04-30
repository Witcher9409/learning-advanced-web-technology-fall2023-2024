"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ pname: '', description: '' });
    const [updateProduct, setUpdateProduct] = useState({ id: null, pname: '', description: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/product');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = async (productId: number) => {
        try {
            await axios.delete(`http://localhost:3001/product/${productId}`); // Assuming your delete endpoint is '/api/product/:id'
            fetchProducts(); // Refresh the product list after deletion
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const addProduct = async () => {
        try {
            await axios.post('http://localhost:3001/product/product', newProduct);
            setNewProduct({ pname: '', description: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const updateProductById = async () => {
        try {
            await axios.put(`http://localhost:3001/product/${updateProduct.id}`, updateProduct);
            setUpdateProduct({ id: null, pname: '', description: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleChange = (e: any) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleUpdateChange = (e: any) => {
        setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value });
    };

    const startUpdate = (product: any) => {
        setUpdateProduct({ id: product.id, pname: product.pname, description: product.description });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Dashboard</h1>

        <h2>Add Product</h2>
        <div style={{ marginBottom: '15px' }}>
            <label style={{ marginRight: '10px' }}>Product Name: </label>
            <input
                type="text"
                name="pname"
                value={newProduct.pname}
                onChange={handleChange}
                style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
        </div>
        <div style={{ marginBottom: '15px' }}>
            <label style={{ marginRight: '10px' }}>Description: </label>
            <input
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
        </div>
        <button
            onClick={addProduct}
            style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
            Add Product
        </button>
        <hr />

        <h2>Update Product</h2>
        <div style={{ marginBottom: '15px' }}>
            <label style={{ marginRight: '10px' }}>Product Name: </label>
            <input
                type="text"
                name="pname"
                value={updateProduct.pname}
                onChange={handleUpdateChange}
                style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
        </div>
        <div style={{ marginBottom: '15px' }}>
            <label style={{ marginRight: '10px' }}>Description: </label>
            <input
                type="text"
                name="description"
                value={updateProduct.description}
                onChange={handleUpdateChange}
                style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
        </div>
        <button
            onClick={updateProductById}
            style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
            Update Product
        </button>
        <hr />

        <h2>Products</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {products.map((product: any) => (
                <li key={product.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{product.pname}</span>
                    <button
                        onClick={() => deleteProduct(product.id)}
                        style={{ padding: '8px 12px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => startUpdate(product)}
                        style={{ padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
                    >
                        Update
                    </button>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default AdminPage;
