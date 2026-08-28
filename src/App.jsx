import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    item: "",
    quantity: "1",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        location: "",
        item: "",
        quantity: "1",
        notes: "",
      });
    }, 4000);
  };

  const scrollToOrder = () => {
    document.getElementById("order").scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <span className="logo-main">INKO</span>
            <span className="logo-sub">ERRANDS</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <button className="nav-order-btn" onClick={scrollToOrder}>
              Request an Errand
            </button>
          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main>

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
                >
                  Request an Errand
                  <span>→</span>
                </button>

                <a href="#how-it-works" className="secondary-btn">
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


        {/* ================= SERVICES ================= */}
        <section className="services section" id="services">

          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>

            <h2>
              Your CBD errands,
              <span> handled.</span>
            </h2>

            <p>
              You don't have to fight traffic, find parking or spend
              hours walking around the CBD. Give us the list.
            </p>
          </div>


          <div className="services-grid">

            <div className="service-card">
              <div className="service-icon">🛒</div>

              <h3>Shopping</h3>

              <p>
                Need something from a shop in the CBD?
                Send us the details and we'll purchase it for you.
              </p>

              <span className="service-number">01</span>
            </div>


            <div className="service-card">
              <div className="service-icon">📦</div>

              <h3>Pickups</h3>

              <p>
                Already paid for something? We'll pick it up
                from the CBD and bring it to you.
              </p>

              <span className="service-number">02</span>
            </div>


            <div className="service-card">
              <div className="service-icon">📄</div>

              <h3>Document Collection</h3>

              <p>
                Need documents, parcels or other items collected
                from the CBD? We can handle the trip.
              </p>

              <span className="service-number">03</span>
            </div>


            <div className="service-card">
              <div className="service-icon">🎁</div>

              <h3>Special Requests</h3>

              <p>
                Have a unique request? Tell us what you need
                and we'll see how we can help.
              </p>

              <span className="service-number">04</span>
            </div>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}
        <section className="how-section section" id="how-it-works">

          <div className="section-heading center">

            <span className="eyebrow">HOW IT WORKS</span>

            <h2>
              Three steps.
              <span> Zero stress.</span>
            </h2>

            <p>
              Getting someone to run your CBD errands
              shouldn't be complicated.
            </p>

          </div>


          <div className="steps">

            <div className="step">

              <div className="step-number">01</div>

              <div>
                <h3>Tell us what you need</h3>

                <p>
                  Fill out our simple request form with
                  the item you want and where to find it.
                </p>
              </div>

            </div>


            <div className="step">

              <div className="step-number">02</div>

              <div>
                <h3>We go to the CBD</h3>

                <p>
                  We head into the CBD, find your item,
                  purchase or collect it for you.
                </p>
              </div>

            </div>


            <div className="step">

              <div className="step-number">03</div>

              <div>
                <h3>We bring it to you</h3>

                <p>
                  Once your errand is complete, we'll
                  arrange delivery to your location.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= ORDER ================= */}
        <section className="order-section section" id="order">

          <div className="order-container">

            <div className="order-info">

              <span className="eyebrow">REQUEST AN ERRAND</span>

              <h2>
                Let us handle
                <span> the trip.</span>
              </h2>

              <p>
                Fill in the form and tell us what you need.
                We'll review your request and get back to you
                with the estimated cost.
              </p>


              <div className="order-points">

                <div>
                  <span>✓</span>
                  <p>No complicated process</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Clear communication</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Convenient delivery</p>
                </div>

              </div>

            </div>


            <div className="form-card">

              {submitted ? (

                <div className="success-message">

                  <div className="success-icon">✓</div>

                  <h3>Request received!</h3>

                  <p>
                    We've received your errand request.
                    We'll get back to you shortly.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="primary-btn"
                  >
                    Make another request
                  </button>

                </div>

              ) : (

                <form onSubmit={handleSubmit}>

                  <div className="form-row">

                    <div className="form-group">
                      <label>Your name</label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Michael"
                        required
                      />
                    </div>


                    <div className="form-group">
                      <label>Phone number</label>

                      <input
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

                    <label>Where should we deliver?</label>

                    <input
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

                      <label>What do you need?</label>

                      <input
                        type="text"
                        name="item"
                        value={formData.item}
                        onChange={handleChange}
                        placeholder="e.g. Phone charger"
                        required
                      />

                    </div>


                    <div className="form-group quantity">

                      <label>Quantity</label>

                      <input
                        type="number"
                        min="1"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>Additional details</label>

                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us anything else we should know..."
                      rows="4"
                    ></textarea>

                  </div>


                  <button type="submit" className="submit-btn">
                    Send Errand Request
                    <span>→</span>
                  </button>

                  <p className="form-note">
                    We'll contact you to confirm the details and cost
                    before proceeding.
                  </p>

                </form>

              )}

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section className="about-section section" id="about">

          <div className="about-container">

            <div className="about-visual">

              <div className="about-box">

                <span className="about-big">INKO</span>

                <span className="about-small">
                  ERRANDS
                </span>

                <div className="about-circle">
                  →
                </div>

              </div>

            </div>


            <div className="about-content">

              <span className="eyebrow">WHY INKO?</span>

              <h2>
                The CBD is busy.
                <span> Your life is busier.</span>
              </h2>

              <p>
                We created Inkognito Errands for people who need
                something from Nairobi's CBD but don't want to
                spend their time going there.
              </p>

              <p>
                Whether you're working, running a business or simply
                don't want to deal with CBD traffic and parking,
                we're here to make things easier.
              </p>

              <div className="about-highlight">
                <strong>Give us the task.</strong>
                <span>We'll handle the trip.</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="cta-section">

          <div className="cta-content">

            <span className="eyebrow">NEED SOMETHING?</span>

            <h2>
              Don't go to the CBD.
              <br />
              <span>Send us instead.</span>
            </h2>

            <p>
              Your time is valuable. Let Inkognito handle the errand.
            </p>

            <button
              className="cta-btn"
              onClick={scrollToOrder}
            >
              Request an Errand
              <span>→</span>
            </button>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
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

    </div>
  );
}

export default App;