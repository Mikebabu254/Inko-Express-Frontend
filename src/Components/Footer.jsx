
function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-main">INKO</span>
            <span className="logo-sub">ERRANDS</span>
          </a>

          <p>
            Your personal CBD shopping and errands assistant.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-column">
          <h4>Services</h4>

          <a href="#services">Shopping</a>
          <a href="#services">Pickups</a>
          <a href="#services">Document Collection</a>
          <a href="#services">Special Requests</a>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>

          <a href="tel:+254700000000">
            +254 700 000 000
          </a>

          <a href="mailto:hello@inkoerrands.com">
            hello@inkoerrands.com
          </a>

          <a href="#order">
            Request an Errand
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Inkognito Errands. All rights reserved.
        </p>

        <p>
          Nairobi, Kenya
        </p>
      </div>
    </footer>
  );
}

export default Footer;
