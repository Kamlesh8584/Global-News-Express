
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Headers.css';


function Headers() {
  const navigate = useNavigate();

  return (
    <header className="news-header">
      <div className="logo" onClick={() => navigate('/home')}>
 GLOBAL NEWS EXPRESS

</div>
<nav className="nav-links">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </nav>
    </header>
  );
}

export default Headers;
