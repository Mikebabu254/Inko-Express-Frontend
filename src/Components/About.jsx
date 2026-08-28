function About() {
  return (
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
  );
}

export default About;

