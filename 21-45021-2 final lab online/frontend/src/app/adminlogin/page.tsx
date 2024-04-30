// pages/login.js
"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [formData, setFormData] = useState({
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
            const response = await axios.post('http://localhost:3001/admin/auth/login', formData);

            console.log('Login successful:', response.data);


        } catch (error) {
            console.error('Error during login:', error);

        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ color: 'blue' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div style={{ color: 'blue' }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" >Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
