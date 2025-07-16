import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home({ lang }) {
  const navigate = useNavigate();

  const t = {
    en: {
      title: "Daily News Express",
      subtitle: "Your source for the latest and most reliable news",
      explore: "Explore Categories",
      channels: "Popular News Channels",
      headlines: "Latest Headlines",
      featured: "Featured Story",
    },
    hi: {
      title: "डेली न्यूज़ एक्सप्रेस",
      subtitle: "आपके लिए सबसे ताजा और विश्वसनीय समाचार",
      explore: "श्रेणियाँ देखें",
      channels: "लोकप्रिय समाचार चैनल",
      headlines: "ताज़ा सुर्खियाँ",
      featured: "चयनित खबर",
    },
  };

  const trans = t[lang];

  // Channel icons data
  const channels = [
    { name: "BBC", emoji: "🌍", link: "/YT", channelId: "UC16niRr50-MSBwiO3YDb3RA" },
    { name: "CNN", emoji: "🇺🇸", link: "/YT", channelId: "UCupvZG-5ko_eiXAupbDfxWw" },
    { name: "DW", emoji: "🇩🇪", link: "/YT", channelId: "UCknLrEdhRCp1aegoMqRaCZg" },
    { name: "Sky", emoji: "📡", link: "/YT", channelId: "UCoMdktPbSTixAyNGwb-UYkQ" },
    { name: "Al Jazeera", emoji: "🌐", link: "/YT", channelId: "UCNye-wNBqNL5ZzHSJj3l8Bg" },
    { name: "NDTV", emoji: "📰", link: "/YT", channelId: "UCZFMm1mMw0F81Z37aaEzTUA" },
    { name: "Aaj Tak", emoji: "🇮🇳", link: "/YT", channelId: "UCt4atlExw8aj3Bm79nv1fig" },
  ];

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>{trans.title}</h1>
          <p>{trans.subtitle}</p>
        </div>
      </section>

      <section className="categories">
        <h2>{trans.explore}</h2>
        <div className="category-list">
          <span onClick={() => navigate('/politics')}>Politics</span>
          <span onClick={() => navigate('/business')}>Business</span>
          <span onClick={() => navigate('/technology')}>Technology</span>
          <span onClick={() => navigate('/sports')}>Sports</span>
          <span onClick={() => navigate('/entertainment')}>Entertainment</span>
          <span onClick={() => navigate('/health')}>Health</span>
          <span onClick={() => navigate('/YT')}>Youtube News</span>
        </div>
      </section>


      <section className="latest-news">
        <h2>{trans.headlines}</h2>
        <div className="news-grid">
          <article onClick={() => navigate('/politics')}>
            <h3>🌍 Global Politics Today</h3>
            <p>World leaders meet to discuss climate change policies and strategies for 2025.</p>
          </article>
          <article onClick={() => navigate('/health')}>
            <h3>📈 Health Update</h3>
            <p>Health News keeps you informed and aware of what matters most to your well-being.</p>
          </article>
          <article onClick={() => navigate('/sports')}>
            <h3>⚽ Sports Update</h3>
            <p>India beats Australia in a thrilling final to lift the World Cup trophy.</p>
          </article>
        </div>
      </section>

      <section className="featured-article">
        <h2>{trans.featured}</h2>
        <div className="featured-content">
          <div className="featured-text">
            <h3>Inside the Digital News Revolution</h3>
            <p>
              With readers moving online, how newsrooms around the world are adapting to digital-first storytelling.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </section>
            {/* News Channel Icons Section */}
      <section className="channel-icons">
        <h2>{trans.channels}</h2>
        <div className="channel-icon-row">
          {channels.map((ch, i) => (
            <div
              key={i}
              className="channel-icon"
              title={ch.name}
              onClick={() => navigate('/YT')}
            >
              <span style={{ fontSize: '1.8rem' }}>{ch.emoji}</span>
              <p style={{ marginTop: '5px', fontSize: '0.9rem' }}>{ch.name}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
