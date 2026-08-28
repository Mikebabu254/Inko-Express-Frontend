function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/inko express logo.png"
            alt="Inko Express"
            className="footer-logo"
          />

          <p>
            CBD shopping made easy.
            <br />
            You stay. We shop. We deliver.
          </p>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>

          <a href="#home">
            Home
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#about">
            About Us
          </a>
        </div>

        <div className="footer-column">
          <h4>SERVICES</h4>

          <a href="#services">
            CBD Shopping
          </a>

          <a href="#services">
            Pickup &amp; Delivery
          </a>

          <a href="#services">
            Document Collection
          </a>

          <a href="#services">
            Special Errands
          </a>
        </div>

        <div className="footer-column">
          <h4>CONTACT</h4>

          <a href="tel:+254781325424">
            +254 781 325 424
          </a>

          <a href="mailto:michaelndolo17142@gmail.com">
            michaelndolo17142@gmail.com
          </a>

          <a href="#order">
            Request an Errand
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Inko Express. All rights reserved.
        </p>

        <p>
          Nairobi, Kenya
        </p>
      </div>
    </footer>
  );
}

export default Footer;

