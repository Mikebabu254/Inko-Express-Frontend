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

        <div className="hero-card-wrapper">
          <div className="hero-card">
            <div className="card-top">
              <span className="card-icon">🛍️</span>

              <div>
                <small>INKO EXPRESS</small>
                <h3>Your shopping list</h3>
              </div>

              <span className="status-dot"></span>
            </div>

            <div className="shopping-list">
              <div className="shopping-item">
                <span>📱</span>

                <div>
                  <strong>Phone accessories</strong>
                  <small>CBD electronics shop</small>
                </div>

                <b>✓</b>
              </div>

              <div className="shopping-item">
                <span>👕</span>

                <div>
                  <strong>Clothing</strong>
                  <small>City Market area</small>
                </div>

                <b>✓</b>
              </div>

              <div className="shopping-item">
                <span>📚</span>

                <div>
                  <strong>Books & stationery</strong>
                  <small>Tom Mboya Street</small>
                </div>

                <b>✓</b>
              </div>
            </div>

            <div className="card-footer">
              <div>
                <small>Delivery</small>
                <strong>To your location</strong>
              </div>

              <span>→</span>
            </div>
          </div>

          <div className="floating-card">
            <span>✓</span>

            <div>
              <strong>Errand accepted</strong>
              <small>We're on our way</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
