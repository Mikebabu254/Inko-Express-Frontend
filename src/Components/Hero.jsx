
function Hero() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span></span>
            Your CBD shopping assistant
          </div>

          <h1>
            Too busy for the
            <span> CBD?</span>
            <br />
            We'll go for you.
          </h1>

          <p>
            Tell us what you need from the Nairobi CBD.
            We'll buy it, collect it and bring it to you.
            Simple, convenient and stress-free.
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
              <strong>CBD</strong>
              <span>Shopping</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>Fast</strong>
              <span>Service</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>Easy</strong>
              <span>Ordering</span>
            </div>
          </div>
        </div>

        <div className="hero-card-wrapper">
          <div className="hero-card">
            <div className="card-top">
              <span className="card-icon">🛍️</span>

              <div>
                <small>INKO ERRANDS</small>
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

export default Hero;
