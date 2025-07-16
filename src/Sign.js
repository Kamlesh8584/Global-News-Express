import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const wrapperStyle = {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
  };

  const toggleStyle = {
    marginBottom: '1rem',
    fontSize: '0.9rem',
    color: '#555',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '0.75rem',
    width: '100%',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
  };

  const linkStyle = {
    display: 'block',
    textAlign: 'center',
    marginTop: '1rem',
    color: '#007bff',
    fontSize: '0.9rem',
    textDecoration: 'none',
  };

  const messageStyle = {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '0.95rem',
    color: message === 'Registration successful!' ? 'green' : 'red',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password) {
      setMessage('All fields are required');
      return;
    }

    setMessage('Registration successful!');
    setTimeout(() => {
      navigate('/home'); // redirect after signup
    }, 1000);
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Sign Up</h2>
        {message && <div style={messageStyle}>{message}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <div
            style={toggleStyle}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </div>
          <button type="submit" style={buttonStyle}>
            Register
          </button>
          <a href="/login" style={linkStyle}>
            Already have an account? Log In
          </a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
