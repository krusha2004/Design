import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ selectedCategory, setSelectedCategory, categories }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="logo" href="/">DesiVastra</a>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-left ${menuOpen ? "show" : ""}`}>
          <a href="#home" className="nav-link">Home</a>

          <div className="dropdown">
            <button className="dropbtn">
              Categories <span className="arrow">▼</span>
            </button>
            <ul className="dropdown-content">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  className={selectedCategory === cat.id ? "active-category" : ""}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setMenuOpen(false); // Close menu after selection
                  }}
                >
                  {cat.label}
                </li>
              ))}
            </ul>
          </div>

          <a href="#videos" className="nav-link" onClick={() => setMenuOpen(false)}>Videos</a>
          <a href="#shorts" className="nav-link" onClick={() => setMenuOpen(false)}>Shorts</a>
          <a href="#trending" className="nav-link" onClick={() => setMenuOpen(false)}>Trending</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
