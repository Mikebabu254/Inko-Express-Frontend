
import React, { useState } from "react";

function Heroo() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    item: "",
    quantity: "1",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Errand request:", formData);

    setSubmitted(true);
  };

  return (
    <main>
      {/* ================= HERO ================= */}
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

          {/* HERO VISUAL */}
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

      {/* ================= SERVICES ================= */}
      <section
        className="services section"
        id="services"
      >
        <div className="section-heading">
          <span className="eyebrow">
            OUR SERVICES
          </span>

          <h2>
            Tell us what you need.
            <span> We'll handle the rest.</span>
          </h2>

          <p>
            From shopping to collections, we help you
            get things done in Nairobi CBD without
            having to make the trip yourself.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              🛒
            </div>

            <span className="service-number">
              01
            </span>

            <h3>
              CBD Shopping
            </h3>

            <p>
              Need an item from a CBD shop?
              Tell us what you need and we'll
              go purchase it for you.
            </p>

            <button
              onClick={scrollToOrder}
              type="button"
            >
              Request shopping
              <span>→</span>
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              📦
            </div>

            <span className="service-number">
              02
            </span>

            <h3>
              Pickup &amp; Delivery
            </h3>

            <p>
              Already bought something?
              We'll collect it from the CBD
              and deliver it to your location.
            </p>

            <button
              onClick={scrollToOrder}
              type="button"
            >
              Request pickup
              <span>→</span>
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              📄
            </div>

            <span className="service-number">
              03
            </span>

            <h3>
              Document Collection
            </h3>

            <p>
              Need documents or paperwork
              collected from somewhere in the
              CBD? Let us handle the trip.
            </p>

            <button
              onClick={scrollToOrder}
              type="button"
            >
              Request collection
              <span>→</span>
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              ✨
            </div>

            <span className="service-number">
              04
            </span>

            <h3>
              Special Errands
            </h3>

            <p>
              Have another task in the CBD?
              Send us the details and we'll
              see how we can help.
            </p>

            <button
              onClick={scrollToOrder}
              type="button"
            >
              Make a request
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        className="how-section section"
        id="how-it-works"
      >
        <div className="how-container">
          <div className="how-intro">
            <span className="eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              CBD errands
              <span> made simple.</span>
            </h2>

            <p>
              No traffic. No parking problems.
              No walking around the CBD looking
              for what you need.
            </p>

            <button
              className="light-btn"
              onClick={scrollToOrder}
              type="button"
            >
              Start an errand
              <span>→</span>
            </button>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">
                01
              </div>

              <div className="step-content">
                <div className="step-icon">
                  📝
                </div>

                <h3>
                  Send your request
                </h3>

                <p>
                  Tell us what you need,
                  where it is and where
                  you want it delivered.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                02
              </div>

              <div className="step-content">
                <div className="step-icon">
                  🛍️
                </div>

                <h3>
                  We shop or collect
                </h3>

                <p>
                  Our errand runner heads
                  to the CBD and handles
                  the shopping or collection.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                03
              </div>

              <div className="step-content">
                <div className="step-icon">
                  🛵
                </div>

                <h3>
                  We deliver
                </h3>

                <p>
                  Once everything is ready,
                  we deliver your items
                  to your chosen location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ORDER ================= */}
      <section
        className="order-section section"
        id="order"
      >
        <div className="order-container">
          <div className="order-info">
            <span className="eyebrow">
              REQUEST AN ERRAND
            </span>

            <h2>
              Let us make
              <span> the trip.</span>
            </h2>

            <p>
              Give us the details of your errand.
              We'll review the request and contact
              you before proceeding.
            </p>

            <div className="order-features">
              <div>
                <span>✓</span>
                <p>
                  Simple request process
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Clear communication
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Convenient delivery
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Nairobi CBD focused
                </p>
              </div>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  ✓
                </div>

                <h3>
                  Request received!
                </h3>

                <p>
                  Thank you. We've received your
                  errand request and will contact
                  you shortly.
                </p>

                <button
                  className="primary-btn"
                  onClick={() => setSubmitted(false)}
                  type="button"
                >
                  Make another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-header">
                  <span>
                    INKO EXPRESS
                  </span>

                  <h3>
                    What can we get for you?
                  </h3>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Your name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Michael"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07XX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location">
                    Delivery location
                  </label>

                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Westlands"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="item">
                      What do you need?
                    </label>

                    <input
                      id="item"
                      type="text"
                      name="item"
                      value={formData.item}
                      onChange={handleChange}
                      placeholder="e.g. Phone charger"
                      required
                    />
                  </div>

                  <div className="form-group quantity">
                    <label htmlFor="quantity">
                      Quantity
                    </label>

                    <input
                      id="quantity"
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">
                    Additional details
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us anything else we should know..."
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                >
                  Send Errand Request
                  <span>→</span>
                </button>

                <p className="form-note">
                  We'll contact you to confirm the
                  details and estimated cost.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        className="about-section section"
        id="about"
      >
        <div className="about-container">
          <div className="about-logo">
            <div className="logo-circle">
              <img
                src="/logo.png"
                alt="Inko Express"
              />
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">
              ABOUT INKO EXPRESS
            </span>

            <h2>
              Your time is valuable.
              <span> Let us use ours.</span>
            </h2>

            <p>
              Nairobi CBD can be busy, crowded and
              time-consuming. Finding parking, navigating
              traffic and moving from shop to shop can
              turn a simple purchase into a full afternoon.
            </p>

            <p>
              Inko Express is built to make CBD shopping
              easier. Instead of coming into town yourself,
              simply tell us what you need.
            </p>

            <div className="about-tagline">
              <strong>
                YOU STAY.
              </strong>

              <span>
                WE SHOP.
              </span>

              <strong>
                WE DELIVER.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="cta-pattern"></div>

        <div className="cta-content">
          <img
            src="/inko express logo.png"
            alt="Inko Express"
            className="cta-logo"
          />

          <span className="eyebrow">
            NEED SOMETHING FROM THE CBD?
          </span>

          <h2>
            Stay where you are.
            <br />
            <span>We'll handle the rest.</span>
          </h2>

          <p>
            CBD shopping made easy.
          </p>

          <button
            className="cta-btn"
            onClick={scrollToOrder}
            type="button"
          >
            Request an Errand
            <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Heroo;

