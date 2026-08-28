
function Service() {
  return (
    <section
      className="services section"
      id="services"
    >
      <div className="section-heading">
        <span className="eyebrow">
          WHAT WE DO
        </span>

        <h2>
          Your CBD errands,
          <span> handled.</span>
        </h2>

        <p>
          You don't have to fight traffic, find parking
          or spend hours walking around the CBD. Give us
          the list.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            🛒
          </div>

          <h3>
            Shopping
          </h3>

          <p>
            Need something from a shop in the CBD?
            Send us the details and we'll purchase it
            for you.
          </p>

          <span className="service-number">
            01
          </span>
        </div>

        <div className="service-card">
          <div className="service-icon">
            📦
          </div>

          <h3>
            Pickups
          </h3>

          <p>
            Already paid for something? We'll pick it
            up from the CBD and bring it to you.
          </p>

          <span className="service-number">
            02
          </span>
        </div>

        <div className="service-card">
          <div className="service-icon">
            📄
          </div>

          <h3>
            Document Collection
          </h3>

          <p>
            Need documents, parcels or other items
            collected from the CBD? We can handle
            the trip.
          </p>

          <span className="service-number">
            03
          </span>
        </div>

        <div className="service-card">
          <div className="service-icon">
            🎁
          </div>

          <h3>
            Special Requests
          </h3>

          <p>
            Have a unique request? Tell us what you
            need and we'll see how we can help.
          </p>

          <span className="service-number">
            04
          </span>
        </div>
      </div>
    </section>
  );
}

export default Service;

