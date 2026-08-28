
import React from "react";

function AboutSection() {
  return (
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
  );
}

export default AboutSection;
