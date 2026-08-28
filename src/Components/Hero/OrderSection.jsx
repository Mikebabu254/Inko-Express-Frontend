
import React, { useState } from "react";

function OrderSection() {
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

  return (
    <section className="order-section section" id="order">
      <div className="order-container">

        {/* LEFT SIDE */}
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
              <p>Simple request process</p>
            </div>

            <div>
              <span>✓</span>
              <p>Clear communication</p>
            </div>

            <div>
              <span>✓</span>
              <p>Convenient delivery</p>
            </div>

            <div>
              <span>✓</span>
              <p>Nairobi CBD focused</p>
            </div>

          </div>
        </div>

        {/* FORM CARD */}
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

              {/* NAME + PHONE */}
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

              {/* LOCATION */}
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

              {/* ITEM + QUANTITY */}
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

              {/* NOTES */}
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

              {/* SUBMIT */}
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
  );
}

export default OrderSection;
