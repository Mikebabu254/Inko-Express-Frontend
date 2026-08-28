
import React, { useState } from "react";

import HeroSection from "./Hero/HeroSection";
import ServicesSection from "./Hero/ServicesSection";
import HowItWorksSection from "./Hero/HowItWorksSection";
import OrderSection from "./Hero/OrderSection";
import AboutSection from "./Hero/AboutSection";
import CtaSection from "./Hero/CtaSection";
import Heroo from "./Hero/Hero";

function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    item: "",
    quantity: "1",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
    <main>
      <HeroSection scrollToOrder={scrollToOrder} />
      <ServicesSection scrollToOrder={scrollToOrder} />
      <Heroo scrollToOrder={scrollToOrder}/>
      <HowItWorksSection scrollToOrder={scrollToOrder} />
      <OrderSection
        formData={formData}
        submitted={submitted}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setSubmitted={setSubmitted}
      />
      <AboutSection />
      <CtaSection scrollToOrder={scrollToOrder} />
    </main>
  );
}

export default Hero;

