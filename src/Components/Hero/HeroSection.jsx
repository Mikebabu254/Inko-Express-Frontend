
import React from "react";

function HeroSection({ scrollToOrder }) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            CBD Shopping Made Easy
          </div>

          <h1>
            You stay.
            <br />
            <span>We shop.</span>
            <br />
            You relax.
          </h1>

          <p>
            Need something from Nairobi CBD but don't
            want to make the trip? Inko Express shops,
            collects and delivers it to you.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={scrollToOrder}
              type="button"
            >
              Request an Errand
              <span>→</span>
            </button>

            <a
              href="#how-it-works"
              className="secondary-btn"
            >
              How it works
            </a>

          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <strong>YOU STAY</strong>
              <span>Where you are</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>WE SHOP</strong>
              <span>From the CBD</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>WE DELIVER</strong>
              <span>To your door</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-logo-card">
            <img
              src="/inko express logo.png"
              alt="Inko Express"
            />
          </div>

          <div className="floating-card">

            <div className="floating-icon">
              ✓
            </div>

            <div>
              <strong>Errand accepted</strong>

              <small>
                We're heading to the CBD
              </small>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
