import React from 'react';

function Contact() {
  const wrapperStyle = {
    backgroundColor: '#aacbebff',
    minHeight: '100vh',
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // semi-transparent white card
    padding: '2rem',
    maxWidth: '600px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            style={textareaStyle}
          ></textarea>
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
