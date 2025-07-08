import React from "react";

function About() {
  const sectionStyle = {
    padding: "40px 20px",
    background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#1e3c72",
  };

  const paragraphStyle = {
    maxWidth: "800px",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const highlightBoxStyle = {
    backgroundColor: "#ffffffcc",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
  };

  return (
    <section style={sectionStyle}>
      <div style={highlightBoxStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={paragraphStyle}>
          Welcome to <strong>NEEOTIME</strong>, your go-to destination for premium quality watches. We believe in offering not just products, but stories and styles that resonate with your personality.
        </p>
        <p style={paragraphStyle}>
          Our mission is to blend timeless design with cutting-edge technology to give our customers an unmatched shopping experience. Whether you're looking for classic elegance, modern minimalism, or sporty functionality, we have something just for you.
        </p>
        <p style={paragraphStyle}>
          We’re committed to transparency, craftsmanship, and customer satisfaction. Explore our collection and become a part of the NEEOTIME family today.
        </p>
      </div>
    </section>
  );
}

export default About;
