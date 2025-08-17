// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Footers from './Footers';
import Headers from './Headers';
import News from './News';
import Politics from './Politics';
import Business from './Business';
import Technology from './Technology';
import Sports from './Sports';
import Entertainment from './Entertainment';
import Health from './Health';
import Sign from './Sign';
import YT from './YT';
import Backup from './Backup';
import { auth } from './Firebase'; // ✅ correct
import Admin from './Admin';
import AddPost from './Addpost';
import Cm from './Cm';
import Auth from './Auth';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('lang');
    if (savedTheme === 'dark') setDarkMode(true);
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('lang', lang);
  }, [darkMode, lang]);

  return (
    <>
      <BrowserRouter basename="/Global-News-Express">
        {/* Theme + Language Controls */}
        <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 999 }}>
          
        </div>

        <Headers />

        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/home" element={<Home lang={lang} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/Entertainment" element={<Entertainment/>} />
          <Route path="/Health" element={<Health/>}/>
          <Route path="/Sign" element={<Sign/>}/>
          <Route path="/YT" element={<YT/>}/>
          <Route path="/Backup" element={<Backup/>}/>
          <Route path="Admin" element={<Admin/>}/>
          <Route path="Addpost" element={<AddPost/>}/>
          <Route path="Cm" element={<Cm/>}/>
          <Route path="Auth" element={<Auth/>}/>
        </Routes>

        <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
