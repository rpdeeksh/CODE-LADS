import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this if your backend is on a different URL

// Function to handle user registration
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};

// Function to handle user login
export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/signin`, userData);
    return response.data;
};
