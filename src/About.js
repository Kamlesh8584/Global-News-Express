import React from 'react';

function About() {
  const wrapperStyle = {
    backgroundColor: '#aacbebff', // 👈 Off-white background
    minHeight: '100vh',
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const containerStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '2rem',
    maxWidth: '900px',
    margin: '2rem auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    backgroundColor: '#ffffff', // pure white card
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#007bff',
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1rem',
    textAlign: 'justify',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '1.5rem',
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Global News Express</h1>

        <img
          src="https://img.freepik.com/free-vector/global-news-concept-illustration_114360-8866.jpg"
          alt="Global News Illustration"
          style={imageStyle}
        />

        <p style={paragraphStyle}>
          Welcome to <strong>Global News Express</strong> — your all-in-one news platform delivering the latest headlines, breaking stories, and in-depth coverage from trusted sources worldwide.
        </p>

        <p style={paragraphStyle}>
          In an era flooded with scattered information, we strive to simplify news consumption by aggregating content from reliable APIs and organizing it by categories such as Technology, Sports, Business, Health, and more.
        </p>

        <img
          src="https://img.freepik.com/free-vector/news-concept-illustration_114360-639.jpg"
          alt="News Aggregator Illustration"
          style={imageStyle}
        />

        <h2 style={headingStyle}>How It Works</h2>
        <p style={paragraphStyle}>
          Global News Express uses modern web technologies and third-party news APIs (such as NewsAPI.org) to collect and serve articles dynamically. The content refreshes regularly, ensuring that you're always up to date.
        </p>

        <h2 style={headingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          Our goal is to provide accurate, unbiased, and easy-to-access news for everyone — from students to professionals. We aim to offer a distraction-free reading experience that respects your time and intelligence.
        </p>

        <img
          src="https://img.freepik.com/free-vector/flat-world-news-illustration_23-2148895083.jpg"
          alt="Stay Informed"
          style={imageStyle}
        />

        <h2 style={headingStyle}>Disclaimer</h2>
        <p style={paragraphStyle}>
          We do not create or modify any news content. All articles are fetched from publicly available APIs and are credited to their respective publishers. If you are a publisher with concerns about the use of your content, please contact us directly.
        </p>

        <p style={{ ...paragraphStyle, textAlign: 'center', fontStyle: 'italic' }}>
          Thank you for using Global News Express.
        </p>
      </div>
    </div>
  );
}

export default About;
