
import React from "react";

function HowItWorksSection({ scrollToOrder }) {
  const steps = [
    {
      number: "01",
      icon: "📝",
      title: "Send your request",
      description:
        "Tell us what you need, where it is and where you want it delivered.",
    },
    {
      number: "02",
      icon: "🛍️",
      title: "We shop or collect",
      description:
        "Our errand runner heads to the CBD and handles the shopping or collection.",
    },
    {
      number: "03",
      icon: "🛵",
      title: "We deliver",
      description:
        "Once everything is ready, we deliver your items to your chosen location.",
    },
  ];

  return (
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

          {steps.map((step) => (
            <div
              className="step"
              key={step.number}
            >
              <div className="step-number">
                {step.number}
              </div>

              <div className="step-content">

                <div className="step-icon">
                  {step.icon}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;
