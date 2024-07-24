import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { email });
      if (response.data && response.data.user) {
        setMessage('Login successful');
        navigate('/profile', { state: { user: response.data.user } });
      } else {
        setMessage('Login failed: No user data received');
      }
    } catch (error) {
      // Error handling as shown above
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Login;
