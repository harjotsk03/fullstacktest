import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/api/users/register', { name, email, age });
      setMessage('Registration successful. You can now log in.');
    } catch (error) {
      setMessage('Error registering: ' + error.response.data.error);
    }
  };  

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default Register;
