import React from 'react';

export default function RegisterPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2>Search Employee:</h2>


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1>Register Employee</h1>
                        <div>
                            <h2>Employee Name:</h2>
                            <input type="text" placeholder="Employee Name" />
                        </div>
                        <div>
                            <h2>Company Name:</h2>
                            <input type="text" placeholder="Company Name" />
                        </div>
                        <div>
                            <h2>Contact Number:</h2>
                            <input type="text" placeholder="Contact Number" />
                        </div>
                        <div>
                            <h2>Username:</h2>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div>
                            <h2>Password:</h2>
                            <input type="password" placeholder="Password" />
                        </div>
                        <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none' }}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
