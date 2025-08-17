import React, { useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

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
    padding: '60px',
  },
  welcome: { fontSize: '2.8rem', marginBottom: '20px' },
  description: { fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '400px' },
  rightPanel: {
    flex: 1,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '350px',
    padding: '40px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    borderRadius: '12px',
  },
  loginTitle: { textAlign: 'center', marginBottom: '30px', color: '#333' },
  inputGroup: { position: 'relative', marginBottom: '20px' },
  icon: { position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#999' },
  input: { width: '100%', padding: '12px 40px', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem', outline: 'none' },
  button: { width: '100%', padding: '12px', background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'opacity 0.3s ease' },
  switchText: { textAlign: 'center', marginTop: '16px', fontSize: '0.9rem', color: '#6a11cb', cursor: 'pointer' },
  message: { textAlign: 'center', fontSize: '0.95rem', marginTop: '16px', color: 'green' },
  errorMessage: { textAlign: 'center', fontSize: '0.95rem', marginTop: '16px', color: 'red' },
};

function Sign() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!formData.username || !formData.email || !formData.password) {
      setError('❌ Please fill in all fields!');
      return;
    }

    try {
      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // 2️⃣ Save additional info in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: formData.username,
        email: formData.email,
        createdAt: new Date(),
      });

      setMessage('✅ Signed up successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('❌ ' + err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h1 style={styles.welcome}>Welcome to Global News Express</h1>
        <p style={styles.description}>
          Stay informed with top headlines and breaking news from around the world. Sign up now to personalize your feed.
        </p>
      </div>

      <div style={styles.rightPanel}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.loginTitle}>User Sign Up</h2>

          <div style={styles.inputGroup}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              placeholder="Username"
              style={styles.input}
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <MdEmail style={styles.icon} />
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <MdLock style={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button style={styles.button} type="submit">SIGN UP</button>

          {message && <div style={styles.message}>{message}</div>}
          {error && <div style={styles.errorMessage}>{error}</div>}

          <div style={styles.switchText} onClick={() => navigate('/login')}>
            Already have an account? Login
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
