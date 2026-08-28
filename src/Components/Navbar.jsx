
import React, { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-main">INKO</span>
          <span className="logo-sub">ERRANDS</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
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

