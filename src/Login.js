import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { MdVisibility, MdVisibilityOff, MdEmail, MdLock } from 'react-icons/md';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null); // ✅ message state
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Login Successful');
      setMessageType('success');
      setTimeout(() => {
        navigate('/home');
      }, 1200); // wait before redirect
    } catch (error) {
      setMessage('Login Failed: ' + error.message);
      setMessageType('error');
    }
  };

  return (
    <div style={styles.container}>
      {/* LEFT PANEL */}
      <div style={styles.leftPanel}>
        <h1 style={styles.welcome}>Welcome to Global News Express</h1>
        <p style={styles.description}>
          Global News Express is a modern news aggregator platform that collects and presents up-to-date headlines from trusted sources around the world.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div style={styles.rightPanel}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.loginTitle}>USER LOGIN</h2>

          {/* ✅ Message */}
          {message && (
            <div style={{
              ...styles.messageBox,
              backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
              color: messageType === 'success' ? '#155724' : '#721c24',
              border: `1px solid ${messageType === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
            }}>
              {message}
            </div>
          )}

          {/* Email */}
          <div style={styles.inputGroup}>
            <MdEmail style={styles.icon} />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Password */}
          <div style={styles.inputGroup}>
            <MdLock style={styles.icon} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <div style={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
            </div>
          </div>

          <div style={styles.extraRow}>
            <label>
              <input type="checkbox" style={styles.checkbox} /> Remember
            </label>
          </div>

          <div style={styles.signupLink}>
            <a href="sign" style={styles.forgot}>Didn't have an Account? Sign Up</a>
          </div>

          <button type="submit" style={styles.button}>LOGIN</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  },

  leftPanel: {
    flex: 1,
    background: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '80px',
  },

  welcome: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },

  description: {
    fontSize: '1.2rem',
    lineHeight: '1.7',
    maxWidth: '450px',
  },

  rightPanel: {
    flex: 1,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    width: '100%',
    maxWidth: '420px',
    padding: '50px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    backgroundColor: '#fff',
  },

  loginTitle: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.8rem',
    color: '#333',
    fontWeight: '600',
  },

  messageBox: {
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '0.95rem',
  },

  inputGroup: {
    position: 'relative',
    marginBottom: '24px',
  },

  icon: {
    position: 'absolute',
    top: '50%',
    left: '14px',
    transform: 'translateY(-50%)',
    color: '#999',
    fontSize: '1.1rem',
  },

  eyeIcon: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#999',
    fontSize: '1.1rem',
  },

  input: {
    width: '100%',
    padding: '14px 44px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '1rem',
    outline: 'none',
  },

  extraRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    fontSize: '0.95rem',
  },

  checkbox: {
    marginRight: '6px',
  },

  forgot: {
    color: '#6a11cb',
    textDecoration: 'none',
    fontWeight: '500',
  },

  signupLink: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },

  button: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
  },
};

export default Login;
