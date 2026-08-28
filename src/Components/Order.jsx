
import React, { useState } from "react";

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    item: "",
    quantity: "1",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleNewRequest = () => {
    setFormData({
      name: "",
      phone: "",
      location: "",
      item: "",
      quantity: "1",
      notes: "",
    });

    setSubmitted(false);
  };

  return (
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
              <div className="success-icon">
                ✓
              </div>

              <h3>
                Request received!
              </h3>

              <p>
                We've received your errand request.
                We'll get back to you shortly.
              </p>

              <button
                type="button"
                onClick={handleNewRequest}
                className="primary-btn"
              >
                Make another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-header">
                <span>INKO EXPRESS</span>

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
                  Where should we deliver?
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
                    min="1"
                    name="quantity"
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
                We'll contact you to confirm the details
                and cost before proceeding.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Order;

