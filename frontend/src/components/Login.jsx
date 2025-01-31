import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response =await axios.post('https://personal-expanse-tracker.onrender.com/login', formData);
      console.log(response);
      if (response.data.message) {
        alert('Login successful');
        navigate('/dashboard');
        setIsAuthenticated(true);
      } else {
        alert('Invalid credentials');
      }
    }catch(err){
      console.log(err);
      alert('Login failed');
    }
    // setIsAuthenticated(true);
    // localStorage.setItem('user', JSON.stringify({ email: formData.email }));
    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login; 