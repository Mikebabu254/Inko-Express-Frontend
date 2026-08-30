import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Smartphone,
  Laptop,
  Headphones,
  Shirt,
  House,
  FileText,
  PackageSearch,
  ArrowRight,
  Search,
} from "lucide-react";

import "./Category.css";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";

function Category() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "phones",
      name: "Phones & Tablets",
      description:
        "Smartphones, iPhones, Samsung devices, tablets and phone accessories.",
      icon: Smartphone,
    },
    {
      id: "computers",
      name: "Laptops & Computers",
      description:
        "Laptops, desktop computers, monitors, keyboards and computer accessories.",
      icon: Laptop,
    },
    {
      id: "electronics",
      name: "Electronics",
      description:
        "Headphones, speakers, chargers, cables and other electronic devices.",
      icon: Headphones,
    },
    {
      id: "fashion",
      name: "Fashion & Clothing",
      description:
        "Clothes, shoes, bags and other fashion items from Nairobi CBD.",
      icon: Shirt,
    },
    {
      id: "home-office",
      name: "Home & Office",
      description:
        "Office supplies, furniture, home items and everyday essentials.",
      icon: House,
    },
    {
      id: "documents",
      name: "Documents & Collection",
      description:
        "Document pickup, parcel collection and other CBD collection errands.",
      icon: FileText,
    },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/products/${category.id}`);
  };

  const handleCustomRequest = () => {
    navigate("/custom-request");
  };

  return (
    <div className="category-page">
        <NavBar/>
      {/* ================= NAVBAR ================= */}

      {/* <header className="category-navbar">

        <div className="category-nav-container">

          <div
            className="category-logo"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo.png"
              alt="Inko Express"
            />
          </div>


          <div className="category-nav-actions">

            <button
              className="back-home-btn"
              onClick={() => navigate("/")}
            >
              Home
            </button>

            <button
              className="nav-request-btn"
              onClick={handleCustomRequest}
            >
              Request an Errand
            </button>

          </div>

        </div>

      </header> */}


      {/* ================= HERO ================= */}

      <section className="category-hero">

        <div className="category-hero-content">

          <div className="category-badge">

            <PackageSearch size={15} />

            <span>
              WHAT ARE YOU LOOKING FOR?
            </span>

          </div>


          <h1>
            Choose a
            <span> category.</span>
          </h1>


          <p>
            Select the type of item you want from Nairobi CBD.
            We'll help you find it, buy it and deliver it to you.
          </p>


          {/* SEARCH */}

          <div className="category-search">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search for a product or category..."
            />

          </div>

        </div>

      </section>


      {/* ================= CATEGORY GRID ================= */}

      <section className="categories-section">

        <div className="categories-container">

          <div className="categories-header">

            <div>

              <span className="section-label">
                SHOP BY CATEGORY
              </span>

              <h2>
                What do you need?
              </h2>

            </div>


            <p>
              Choose a category to continue and tell us
              exactly what you're looking for.
            </p>

          </div>


          <div className="categories-grid">

            {categories.map((category) => {

              const Icon = category.icon;

              return (

                <button
                  key={category.id}
                  className="category-card"
                  onClick={() =>
                    handleCategoryClick(category)
                  }
                >

                  <div className="category-card-top">

                    <div className="category-icon">

                      <Icon size={30} />

                    </div>


                    <ArrowRight
                      className="category-arrow"
                      size={21}
                    />

                  </div>


                  <div className="category-card-content">

                    <h3>
                      {category.name}
                    </h3>

                    <p>
                      {category.description}
                    </p>

                  </div>


                  <div className="category-card-footer">

                    <span>
                      Explore category
                    </span>

                    <span className="category-number">
                      0{categories.indexOf(category) + 1}
                    </span>

                  </div>

                </button>

              );
            })}

          </div>


          {/* CUSTOM REQUEST */}

          <div className="custom-request-card">

            <div className="custom-request-icon">

              <PackageSearch size={32} />

            </div>


            <div className="custom-request-content">

              <span>
                CAN'T FIND YOUR CATEGORY?
              </span>

              <h2>
                Tell us what you need.
              </h2>

              <p>
                If what you're looking for isn't listed,
                simply send us a custom request and our team
                will help you find it in Nairobi CBD.
              </p>

            </div>


            <button
              className="custom-request-btn"
              onClick={handleCustomRequest}
            >

              Make a Custom Request

              <ArrowRight size={20} />

            </button>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="category-how">

        <div className="category-how-container">

          <div className="category-how-title">

            <span>
              SIMPLE PROCESS
            </span>

            <h2>
              You choose.
              <br />

              <strong>
                We handle the rest.
              </strong>
            </h2>

          </div>


          <div className="category-steps">

            <div className="category-step">

              <div className="step-circle">
                1
              </div>

              <div>

                <h3>
                  Choose a category
                </h3>

                <p>
                  Select the type of product
                  you're looking for.
                </p>

              </div>

            </div>


            <div className="category-step">

              <div className="step-circle">
                2
              </div>

              <div>

                <h3>
                  Tell us the product
                </h3>

                <p>
                  Give us the product name,
                  brand or description.
                </p>

              </div>

            </div>


            <div className="category-step">

              <div className="step-circle">
                3
              </div>

              <div>

                <h3>
                  We shop & deliver
                </h3>

                <p>
                  We find the product in CBD
                  and deliver it to you.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      {/* <footer className="category-footer">

        <div className="category-footer-container">

          <div className="footer-brand-section">

            <img
              src="/logo.png"
              alt="Inko Express"
            />

            <p>
              You stay. We shop. We deliver.
            </p>

          </div>


          <div className="footer-right">

            <span>
              Nairobi CBD Shopping Made Easy
            </span>

            <button
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>

          </div>

        </div>

      </footer> */}
      <Footer/>

    </div>
  );
}

export default Category;