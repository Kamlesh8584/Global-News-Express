import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Headers.css';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function Headers() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoadingAuth(false);
      // ✅ Move console log outside of useEffect or log user directly
      if (user) console.log('Logged in as:', user.email);
    });

    return () => unsubscribe();
  }, []); // No dependency needed

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setCurrentUser(null);
      navigate('/login');
    });
  };

  if (loadingAuth) return null;

  const isAdmin = currentUser?.email?.toLowerCase() === 'admin@gmail.com';

  return (
    <header className="news-header">
      <div className="logo" onClick={() => navigate('/home')}>
        GLOBAL NEWS EXPRESS
      </div>
      <nav className="nav-links">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>

        {currentUser ? (
          <>
            {isAdmin && (
              <button onClick={() => navigate('/admin')}>Admin Panel</button>
            )}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </nav>
    </header> 
  );
}

export default Headers;
