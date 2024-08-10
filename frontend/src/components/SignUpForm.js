import React, { useState } from 'react';
import { registerUser } from '../services/api';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        age: '',
        profession: '',
        vehicleOwner: false,
        location: '',
        email: '',
        password: '',
    });

    const { age, profession, vehicleOwner, location, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await registerUser(formData);
            console.log('User registered:', data);
            // Redirect or display success message
        } catch (error) {
            console.error('Error registering user:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form className="auth-form" onSubmit={onSubmit}>
            <input type="number" name="age" value={age} onChange={onChange} placeholder="Age" required />
            <input type="text" name="profession" value={profession} onChange={onChange} placeholder="Profession" required />
            <label>
                Vehicle Owner:
                <input type="checkbox" name="vehicleOwner" checked={vehicleOwner} onChange={() => setFormData({ ...formData, vehicleOwner: !vehicleOwner })} />
            </label>
            <input type="text" name="location" value={location} onChange={onChange} placeholder="Location" required />
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
