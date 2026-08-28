
import React from "react";

function CtaSection({ scrollToOrder }) {
  return (
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
  );
}

export default CtaSection;

