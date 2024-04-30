// components/Signup.js
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Signup = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    });



    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/users/auth/register', formData);

            console.log('Signup successful:', response.data);
            // Optionally redirect the user to another page or show a success message
        } catch (error) {
            console.error('Error during signup:', error);
            // Optionally show an error message to the user
        }
    };

    return (
        <center>
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', width: '320px' }}>
                <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Signup</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="userName" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Username:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px' }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer' }}
                >
                    Signup
                </button>
            </form>
        </div>
        </center>
    );
};

export default Signup;
