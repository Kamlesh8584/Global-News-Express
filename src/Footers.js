import React from "react";

function Footers() {
  const footerStyle = {
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    padding: "30px 20px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    marginTop: "40px",
  };

  const textStyle = {
    fontSize: "0.95rem",
    marginBottom: "10px",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  };

  const iconStyle = {
    width: "30px",
    height: "30px",
    backgroundColor: "#ffffff22",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const iconHoverStyle = {
    backgroundColor: "#ffffff55",
    transform: "scale(1.1)",
  };

  const iconList = [
    { name: "🌐", link: "#" },
    { name: "🐦", link: "#" },
    { name: "📘", link: "#" },
    { name: "📸", link: "#" },
  ];

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>&copy; 2025 My React App. All rights reserved.</p>
      <div style={iconContainerStyle}>
        {iconList.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            style={iconStyle}
            onMouseOver={e => Object.assign(e.currentTarget.style, iconHoverStyle)}
            onMouseOut={e => Object.assign(e.currentTarget.style, iconStyle)}
            title="Visit Us"
          >
            <span style={{ fontSize: "1.2rem" }}>{icon.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footers;
