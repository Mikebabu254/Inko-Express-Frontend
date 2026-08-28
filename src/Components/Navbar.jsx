
import React, { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    closeMenu();
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="brand-logo">
          <img
            src="/logo.png"
            alt="Inko Express logo"
          />
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
        >
          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={closeMenu}
          >
            Services
          </a>

          <a
            href="#how-it-works"
            onClick={closeMenu}
          >
            How It Works
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About Us
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

          <button
            className="nav-order-btn"
            onClick={scrollToOrder}
            type="button"
          >
            Request an Errand
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

