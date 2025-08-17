// Dashboard.js
import React, { useState } from 'react';
import AuthInfo from './Auth';
import ContactMessage from './Cm';
import AddPost from './Addpost';

function Admin() {
  const [activeTab, setActiveTab] = useState('auth');

  const renderContent = () => {
    switch (activeTab) {
      case 'auth': return <AuthInfo />;
      case 'contact': return <ContactMessage />;
      case 'addpost': return <AddPost />;
      default: return null;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        background: '#0d6efd',
        color: '#fff',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        borderTopRightRadius: '1.5rem',
        borderBottomRightRadius: '1.5rem'
      }}>
        <h2 style={{ marginBottom: '2rem' }}>Admin Panel</h2>
        <button onClick={() => setActiveTab('auth')} style={sidebarBtn(activeTab === 'auth')}>Authentication Info</button>
        <button onClick={() => setActiveTab('contact')} style={sidebarBtn(activeTab === 'contact')}>Contact Messages</button>
        <button onClick={() => setActiveTab('addpost')} style={sidebarBtn(activeTab === 'addpost')}>Add Post</button>
      </div>

      {/* Content Area */}
      <div style={{
        flex: 1,
        padding: '2rem',
        background: '#f7f9fc',
        overflowY: 'auto'
      }}>
        {renderContent()}
      </div>
    </div>
  );
}

const sidebarBtn = (active) => ({
  background: active ? '#ffffff33' : 'transparent',
  color: '#fff',
  border: 'none',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '16px'
});

export default Admin;
