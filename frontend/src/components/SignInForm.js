import React, { useState } from 'react';
import { loginUser } from '../services/api';

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(formData);
            console.log('User logged in:', data);
            // Optionally, redirect to the home page or display success message
        } catch (error) {
            console.error('Error logging in:', error.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
