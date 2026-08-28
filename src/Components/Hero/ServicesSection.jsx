
import React from "react";

function ServicesSection({ scrollToOrder }) {
  const services = [
    {
      number: "01",
      icon: "🛒",
      title: "CBD Shopping",
      description:
        "Need an item from a CBD shop? Tell us what you need and we'll go purchase it for you.",
      button: "Request shopping",
    },
    {
      number: "02",
      icon: "📦",
      title: "Pickup & Delivery",
      description:
        "Already bought something? We'll collect it from the CBD and deliver it to your location.",
      button: "Request pickup",
    },
    {
      number: "03",
      icon: "📄",
      title: "Document Collection",
      description:
        "Need documents or paperwork collected from somewhere in the CBD? Let us handle the trip.",
      button: "Request collection",
    },
    {
      number: "04",
      icon: "✨",
      title: "Special Errands",
      description:
        "Have another task in the CBD? Send us the details and we'll see how we can help.",
      button: "Make a request",
    },
  ];

  return (
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

        {services.map((service) => (
          <div
            className="service-card"
            key={service.number}
          >
            <div className="service-icon">
              {service.icon}
            </div>

            <span className="service-number">
              {service.number}
            </span>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

            <button
              onClick={scrollToOrder}
              type="button"
            >
              {service.button}
              <span>→</span>
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default ServicesSection;

