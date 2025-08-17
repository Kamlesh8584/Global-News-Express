import React from "react";
import { Link } from "react-router-dom";

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
    marginBottom: "15px",
  };

  const navLinksStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "15px",
  };

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.9rem",
    padding: "6px 10px",
    borderRadius: "5px",
    transition: "background 0.3s",
  };

  const navLinkHoverStyle = {
    backgroundColor: "#ffffff33",
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

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "News", path: "/news" },
    { label: "Politics", path: "/politics" },
    { label: "Business", path: "/business" },
    { label: "Technology", path: "/technology" },
    { label: "Sports", path: "/sports" },
    { label: "Entertainment", path: "/Entertainment" },
    { label: "Health", path: "/Health" },
  ];

  const iconList = [
  ];

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        &copy; 2025 Global News Express. All rights reserved.
      </p>

      <div style={navLinksStyle}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            style={navLinkStyle}
            onMouseOver={(e) =>
              Object.assign(e.currentTarget.style, navLinkHoverStyle)
            }
            onMouseOut={(e) =>
              Object.assign(e.currentTarget.style, navLinkStyle)
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div style={iconContainerStyle}>
        {iconList.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            style={iconStyle}
            onMouseOver={(e) =>
              Object.assign(e.currentTarget.style, iconHoverStyle)
            }
            onMouseOut={(e) =>
              Object.assign(e.currentTarget.style, iconStyle)
            }
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
