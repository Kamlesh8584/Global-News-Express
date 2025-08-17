import React from 'react';

function About() {
  const wrapperStyle = {
    background: 'linear-gradient(135deg, #e3f2fd, #f1f8e9)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '0',
  };

  const sectionStyle = {
    maxWidth: '900px',
    margin: '2rem auto',
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 6px 30px rgba(0, 0, 0, 0.08)',
  };

  const headingStyle = {
    fontSize: '2.8rem',
    color: '#0d47a1',
    textAlign: 'center',
    fontWeight: 700,
    marginBottom: '1rem',
  };

  const subHeadingStyle = {
    fontSize: '1.8rem',
    color: '#1565c0',
    margin: '2rem 0 1rem 0',
    borderBottom: '2px solid #bbdefb',
    paddingBottom: '0.5rem',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '1.2rem',
    lineHeight: '1.7',
  };

  const heroStyle = {
    textAlign: 'center',
    padding: '4rem 2rem 2rem',
    background: 'linear-gradient(to right, #1b65a1ff, #21cbf3)',
    color: '#fff',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  };

  const heroTitleStyle = {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    fontWeight: 800,
  };

  const heroTaglineStyle = {
    fontSize: '1.3rem',
    fontWeight: 400,
    opacity: 0.9,
  };

  const ctaStyle = {
    marginTop: '3rem',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#0d47a1',
    fontWeight: '500',
  };

  return (
    <div style={wrapperStyle}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <h1 style={heroTitleStyle}>Global News Express</h1>
        <p style={heroTaglineStyle}>
          Your one-stop destination for real-time, unbiased global news.
        </p>
      </div>

      {/* What We Do */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>What We Do</h2>
        <p style={paragraphStyle}>
          Global News Express aggregates the latest global headlines from reliable sources using powerful APIs.
        </p>
        <ul style={{ ...paragraphStyle, listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Real-time News Updates</li>
          <li>Category-based filtering (Tech, Sports, Politics, etc.)</li>
          <li>YouTube News Channel Integration</li>
          <li>Responsive and Clean User Interface</li>
        </ul>
      </section>

      {/* How It Works */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>How It Works</h2>
        <p style={paragraphStyle}>
          Our system fetches data using <strong>NewsAPI</strong> and the <strong>YouTube Data API</strong>. The content is dynamically updated based on categories and preferences, giving users instant access to fresh and authentic global news.
        </p>
      </section>

      {/* Our Mission */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          We believe in delivering fast, factual, and frictionless news experiences. Our mission is to offer a clean platform for people to stay globally informed.
        </p>
      </section>

      {/* Disclaimer */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Disclaimer</h2>
        <p style={paragraphStyle}>
          Global News Express uses public APIs to fetch content from official sources. All news data and videos are credited to their original publishers. We do not host or modify any content.
        </p>
      </section>

      {/* Call to Action */}
      <div style={ctaStyle}>
        Thank you for using <strong>Global News Express</strong>. Stay informed. Stay aware.
      </div>
    </div>
  );
}

export default About;
