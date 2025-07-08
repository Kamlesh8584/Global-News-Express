import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';         // optional
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Footers from './Footers';
import Headers from './Headers';
import News from './News';
import Politics from './Politics';

function App() {
  return (
   
   <>
   <BrowserRouter>
      <Headers />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News/>}/>
        <Route path="/politics" element={<Politics/>}/>
      </Routes>
<div>
    
   </div>
      <Footers />
    </BrowserRouter>
   
   
    </>
  );
}

export default App;
