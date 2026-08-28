function Cta() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
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
          type="button"
        >
          Request an Errand
          <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default Cta;

