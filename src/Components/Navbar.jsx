
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
    Menu,
    X,
    ChevronDown,
    ShoppingBag,
    ArrowRight
} from "lucide-react";

import "./Navbar.css";


function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    const closeMenu = () => {
        setMenuOpen(false);
        setCategoriesOpen(false);
    };


    const handleRequest = () => {

        closeMenu();

        navigate("/custom-request");

    };


    const categories = [
        {
            name: "Phones & Tablets",
            path: "/products/phones"
        },
        {
            name: "Laptops & Computers",
            path: "/products/computers"
        },
        {
            name: "Electronics",
            path: "/products/electronics"
        },
        {
            name: "Fashion & Clothing",
            path: "/products/fashion"
        },
        {
            name: "Home & Office",
            path: "/products/home-office"
        },
        {
            name: "Percel & Documents Collection",
            path: "/products/documents"
        }
    ];


    const isActive = (path) => {

        return location.pathname === path;

    };


    return (

        <header className="navbar">

            <div className="nav-container">


                {/* =================================
                    LOGO
                ================================= */}

                <Link
                    to="/"
                    className="brand-logo"
                    onClick={closeMenu}
                >

                    <img
                        src="/logo.png"
                        alt="Inko Express"
                    />

                </Link>


                {/* =================================
                    DESKTOP NAVIGATION
                ================================= */}

                <nav
                    className={`nav-links ${
                        menuOpen ? "active" : ""
                    }`}
                >


                    <Link
                        to="/"
                        className={
                            isActive("/")
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={closeMenu}
                    >
                        Home
                    </Link>


                    <Link
                        to="/category"
                        className={
                            isActive("/category")
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={closeMenu}
                    >
                        Categories
                    </Link>


                    {/* =================================
                        CATEGORIES DROPDOWN
                    ================================= */}

                    <div
                        className="nav-dropdown"
                        onMouseEnter={() =>
                            setCategoriesOpen(true)
                        }
                        onMouseLeave={() =>
                            setCategoriesOpen(false)
                        }
                    >

                        <button
                            className="nav-dropdown-btn"
                            type="button"
                            onClick={() =>
                                setCategoriesOpen(
                                    !categoriesOpen
                                )
                            }
                        >

                            Errands by Category

                            <ChevronDown
                                size={16}
                                className={
                                    categoriesOpen
                                        ? "rotate"
                                        : ""
                                }
                            />

                        </button>


                        {categoriesOpen && (

                            <div className="nav-dropdown-menu">

                                <div className="dropdown-heading">

                                    <span>
                                        FIND WHAT YOU NEED
                                    </span>

                                    <p>
                                        Choose a category
                                    </p>

                                </div>


                                {categories.map(
                                    (category) => (

                                        <Link
                                            key={
                                                category.path
                                            }
                                            to={
                                                category.path
                                            }
                                            onClick={
                                                closeMenu
                                            }
                                        >

                                            <span>
                                                {
                                                    category.name
                                                }
                                            </span>

                                            <ArrowRight
                                                size={15}
                                            />

                                        </Link>

                                    )
                                )}


                                <div className="dropdown-custom">

                                    <span>
                                        Can't find it?
                                    </span>

                                    <button
                                        type="button"
                                        onClick={
                                            handleRequest
                                        }
                                    >
                                        Make a custom request
                                    </button>

                                </div>

                            </div>

                        )}

                    </div>


                    <a
                        href="/#how-it-works"
                        className="nav-link"
                        onClick={closeMenu}
                    >
                        How It Works
                    </a>


                    <a
                        href="/#about"
                        className="nav-link"
                        onClick={closeMenu}
                    >
                        About Us
                    </a>


                    <a
                        href="/#contact"
                        className="nav-link"
                        onClick={closeMenu}
                    >
                        Contact
                    </a>


                    {/* =================================
                        REQUEST BUTTON
                    ================================= */}

                    <button
                        className="nav-request-btn"
                        onClick={handleRequest}
                        type="button"
                    >

                        <ShoppingBag size={17} />

                        Request an Item

                        <ArrowRight size={16} />

                    </button>

                </nav>


                {/* =================================
                    MOBILE MENU BUTTON
                ================================= */}

                <button
                    className="menu-btn"
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                    type="button"
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                >

                    {menuOpen ? (

                        <X size={25} />

                    ) : (

                        <Menu size={25} />

                    )}

                </button>

            </div>

        </header>

    );

}


export default NavBar;

