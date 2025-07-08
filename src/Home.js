// Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import News from './News';
import { useNavigate } from 'react-router-dom';
import Politics from './Politics';


function Home() {
    const navigate = useNavigate();
  
  return (
    
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Daily News Express</h1>
          <p>Your source for the latest and most reliable news</p>
        </div>
      </section>
      
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-list">
                <span onClick={() => navigate('/politics')}>Politics</span>
                          <span onClick={() => navigate('/business')}>Business</span>
                          <span onClick={() => navigate('/technology')}>Technology</span>
                          <span onClick={() => navigate('/sports')}>Sports</span>
                          <span onClick={() => navigate('/entertainment')}>Entertainment</span>
                          <span onClick={() => navigate('/health')}>Health</span>
        </div>
      </section>

      <section className="latest-news">
        <h2>Latest Headlines</h2>
        <div className="news-grid">
          <article onClick={() => navigate('/politics')}>
            <h3 >🌍 Global Politics Today</h3>
            <p>World leaders meet to discuss climate change policies and strategies for 2025.</p>
          </article>
          <article onClick={() => navigate('/health')}>
            <h3 >📈 Health Update</h3>
            <p>Stock markets see a sharp rise amid tech boom and investor confidence.</p>
          </article>
          <article onClick={() => navigate('/sports')}>
            <h3 >⚽ Sports Update</h3>
            <p>India beats Australia in a thrilling final to lift the World Cup trophy.</p>
          </article>
        </div>
      </section>
      <section className="featured-article">
        <h2>Featured Story</h2>
        <div className="featured-content">
          <img
            src=""
            alt="featured"
          />
          <div className="featured-text">
            <h3>Inside the Digital News Revolution</h3>
            <p>
              With readers moving online, how newsrooms around the world are adapting to digital-first storytelling.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </section>
   
    </div>
   
  );
}

export default Home;
