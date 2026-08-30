import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    ArrowLeft,
    ArrowRight,
    Search,
    ShoppingBag,
    Smartphone,
    Laptop,
    Headphones,
    Shirt,
    House,
    FileText,
    PackageSearch,
    SlidersHorizontal,
    X
} from "lucide-react";

import "./Products.css";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Products() {

    const navigate = useNavigate();

    const { category } = useParams();

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedBrand, setSelectedBrand] = useState("All");


    /* =========================================
       CATEGORY DATA
    ========================================= */

    const categoryData = {

        phones: {
            title: "Phones & Tablets",
            description:
                "Browse popular phones, tablets and accessories available from Nairobi CBD.",
            icon: Smartphone
        },

        computers: {
            title: "Laptops & Computers",
            description:
                "Find laptops, desktop computers and computer accessories from trusted CBD shops.",
            icon: Laptop
        },

        electronics: {
            title: "Electronics",
            description:
                "Discover electronics, accessories and gadgets available in Nairobi CBD.",
            icon: Headphones
        },

        fashion: {
            title: "Fashion & Clothing",
            description:
                "Find clothing, shoes, bags and fashion items from shops in Nairobi CBD.",
            icon: Shirt
        },

        "home-office": {
            title: "Home & Office",
            description:
                "Browse home essentials, office equipment and everyday items.",
            icon: House
        },

        documents: {
            title: "Documents & Collection",
            description:
                "Request document pickup, parcel collection and other errands within Nairobi CBD.",
            icon: FileText
        }

    };


    /* =========================================
       DUMMY PRODUCTS
    ========================================= */

    const productsData = {

        phones: [

            {
                id: 1,
                name: "iPhone 15 Pro",
                brand: "Apple",
                category: "Smartphone",
                price: "Request Price",
                description:
                    "Premium Apple smartphone with powerful performance and professional camera system.",
                emoji: "📱"
            },

            {
                id: 2,
                name: "Samsung Galaxy S24",
                brand: "Samsung",
                category: "Smartphone",
                price: "Request Price",
                description:
                    "Flagship Samsung smartphone with powerful camera and performance.",
                emoji: "📱"
            },

            {
                id: 3,
                name: "iPhone 14",
                brand: "Apple",
                category: "Smartphone",
                price: "Request Price",
                description:
                    "Popular Apple smartphone available in different storage options.",
                emoji: "📱"
            },

            {
                id: 4,
                name: "Samsung Galaxy A55",
                brand: "Samsung",
                category: "Smartphone",
                price: "Request Price",
                description:
                    "Reliable mid-range smartphone with excellent battery performance.",
                emoji: "📱"
            },

            {
                id: 5,
                name: "Redmi Note Series",
                brand: "Xiaomi",
                category: "Smartphone",
                price: "Request Price",
                description:
                    "Affordable smartphone options with strong performance.",
                emoji: "📱"
            },

            {
                id: 6,
                name: "iPad Air",
                brand: "Apple",
                category: "Tablet",
                price: "Request Price",
                description:
                    "Powerful Apple tablet for work, entertainment and everyday use.",
                emoji: "📲"
            }

        ],


        computers: [

            {
                id: 1,
                name: "HP EliteBook",
                brand: "HP",
                category: "Laptop",
                price: "Request Price",
                description:
                    "Business laptop suitable for work, school and everyday tasks.",
                emoji: "💻"
            },

            {
                id: 2,
                name: "MacBook Air",
                brand: "Apple",
                category: "Laptop",
                price: "Request Price",
                description:
                    "Lightweight and powerful laptop for professionals and students.",
                emoji: "💻"
            },

            {
                id: 3,
                name: "Dell Latitude",
                brand: "Dell",
                category: "Laptop",
                price: "Request Price",
                description:
                    "Reliable business laptop available in multiple specifications.",
                emoji: "💻"
            },

            {
                id: 4,
                name: "Desktop Computer",
                brand: "Custom",
                category: "Desktop",
                price: "Request Price",
                description:
                    "Desktop computers and custom builds for office or personal use.",
                emoji: "🖥️"
            },

            {
                id: 5,
                name: "Computer Monitor",
                brand: "Various",
                category: "Accessories",
                price: "Request Price",
                description:
                    "Monitors for office work, gaming and professional use.",
                emoji: "🖥️"
            },

            {
                id: 6,
                name: "Mechanical Keyboard",
                brand: "Various",
                category: "Accessories",
                price: "Request Price",
                description:
                    "Keyboards for gaming, office work and programming.",
                emoji: "⌨️"
            }

        ],


        electronics: [

            {
                id: 1,
                name: "Wireless Headphones",
                brand: "Various",
                category: "Audio",
                price: "Request Price",
                description:
                    "Wireless headphones and earbuds from popular brands.",
                emoji: "🎧"
            },

            {
                id: 2,
                name: "Bluetooth Speaker",
                brand: "JBL",
                category: "Audio",
                price: "Request Price",
                description:
                    "Portable Bluetooth speakers for music and entertainment.",
                emoji: "🔊"
            },

            {
                id: 3,
                name: "Phone Charger",
                brand: "Various",
                category: "Accessories",
                price: "Request Price",
                description:
                    "Chargers, adapters and charging accessories.",
                emoji: "🔌"
            },

            {
                id: 4,
                name: "Smart Watch",
                brand: "Various",
                category: "Wearables",
                price: "Request Price",
                description:
                    "Smart watches and fitness trackers.",
                emoji: "⌚"
            }

        ],


        fashion: [

            {
                id: 1,
                name: "Men's Clothing",
                brand: "Various",
                category: "Clothing",
                price: "Request Price",
                description:
                    "Shirts, trousers, jackets and other men's fashion.",
                emoji: "👔"
            },

            {
                id: 2,
                name: "Women's Clothing",
                brand: "Various",
                category: "Clothing",
                price: "Request Price",
                description:
                    "Dresses, tops, trousers and other women's fashion.",
                emoji: "👗"
            },

            {
                id: 3,
                name: "Sneakers",
                brand: "Various",
                category: "Shoes",
                price: "Request Price",
                description:
                    "Casual, sports and fashion sneakers.",
                emoji: "👟"
            },

            {
                id: 4,
                name: "Bags",
                brand: "Various",
                category: "Accessories",
                price: "Request Price",
                description:
                    "Backpacks, handbags and travel bags.",
                emoji: "👜"
            }

        ],


        "home-office": [

            {
                id: 1,
                name: "Office Chair",
                brand: "Various",
                category: "Office",
                price: "Request Price",
                description:
                    "Comfortable office chairs for home and workplace.",
                emoji: "🪑"
            },

            {
                id: 2,
                name: "Office Desk",
                brand: "Various",
                category: "Office",
                price: "Request Price",
                description:
                    "Office and study desks in different sizes.",
                emoji: "🗄️"
            },

            {
                id: 3,
                name: "Printer",
                brand: "HP",
                category: "Office",
                price: "Request Price",
                description:
                    "Printers for home, school and office use.",
                emoji: "🖨️"
            },

            {
                id: 4,
                name: "Home Essentials",
                brand: "Various",
                category: "Home",
                price: "Request Price",
                description:
                    "Everyday home products and household essentials.",
                emoji: "🏠"
            }

        ],


        documents: [

            {
                id: 1,
                name: "Document Collection",
                brand: "Errand",
                category: "Documents",
                price: "Request Quote",
                description:
                    "We collect your documents from offices and shops within Nairobi CBD.",
                emoji: "📄"
            },

            {
                id: 2,
                name: "Parcel Collection",
                brand: "Errand",
                category: "Collection",
                price: "Request Quote",
                description:
                    "We collect parcels and packages from CBD locations.",
                emoji: "📦"
            },

            {
                id: 3,
                name: "Shop Pickup",
                brand: "Errand",
                category: "Collection",
                price: "Request Quote",
                description:
                    "Bought something already? We can collect and deliver it.",
                emoji: "🛍️"
            }

        ]

    };


    /* =========================================
       CURRENT CATEGORY
    ========================================= */

    const currentCategory =
        categoryData[category] ||
        categoryData.phones;


    const currentProducts =
        productsData[category] ||
        productsData.phones;


    const CategoryIcon =
        currentCategory.icon;


    /* =========================================
       BRANDS
    ========================================= */

    const brands = [
        "All",
        ...new Set(
            currentProducts.map(
                (product) => product.brand
            )
        )
    ];


    /* =========================================
       FILTER PRODUCTS
    ========================================= */

    const filteredProducts = useMemo(() => {

        return currentProducts.filter(
            (product) => {

                const matchesSearch =
                    product.name
                        .toLowerCase()
                        .includes(
                            searchTerm.toLowerCase()
                        ) ||
                    product.description
                        .toLowerCase()
                        .includes(
                            searchTerm.toLowerCase()
                        );


                const matchesBrand =
                    selectedBrand === "All" ||
                    product.brand === selectedBrand;


                return (
                    matchesSearch &&
                    matchesBrand
                );

            }
        );

    }, [
        searchTerm,
        selectedBrand,
        currentProducts
    ]);


    /* =========================================
       REQUEST PRODUCT
    ========================================= */

    const handleProductRequest = (
        product
    ) => {

        navigate(
            "/custom-request",
            {
                state: {
                    product: product.name,
                    category: currentCategory.title
                }
            }
        );

    };


    return (

        <div className="products-page">


            {/* ================= NAVBAR ================= */}

            <NavBar/>


            {/* ================= HERO ================= */}

            <section className="products-hero">

                <div className="products-hero-container">


                    <button
                        className="products-back-btn"
                        onClick={() =>
                            navigate("/category")
                        }
                    >

                        <ArrowLeft size={18} />

                        Back to Categories

                    </button>


                    <div className="products-hero-content">


                        <div className="products-category-icon">

                            <CategoryIcon size={36} />

                        </div>


                        <div>

                            <span className="products-small-label">

                                BROWSE PRODUCTS

                            </span>


                            <h1>

                                {currentCategory.title}

                            </h1>


                            <p>

                                {
                                    currentCategory.description
                                }

                            </p>

                        </div>


                    </div>


                    {/* SEARCH */}

                    <div className="products-search-wrapper">

                        <Search size={21} />

                        <input
                            type="text"
                            placeholder="Search for a product..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(
                                    e.target.value
                                )
                            }
                        />


                        {searchTerm && (

                            <button
                                className="clear-search"
                                onClick={() =>
                                    setSearchTerm("")
                                }
                            >

                                <X size={18} />

                            </button>

                        )}

                    </div>


                </div>

            </section>


            {/* ================= PRODUCTS ================= */}

            <section className="products-section">

                <div className="products-container">


                    {/* HEADER */}

                    <div className="products-section-header">


                        <div>

                            <span className="products-label">

                                AVAILABLE OPTIONS

                            </span>


                            <h2>

                                Popular requests

                            </h2>


                        </div>


                        <div className="products-count">

                            <SlidersHorizontal
                                size={17}
                            />

                            <span>

                                {
                                    filteredProducts.length
                                }

                                {" "}

                                items found

                            </span>

                        </div>


                    </div>


                    {/* BRAND FILTER */}

                    <div className="brand-filter">

                        {brands.map(
                            (brand) => (

                                <button
                                    key={brand}
                                    className={
                                        selectedBrand ===
                                        brand
                                            ? "brand-btn active"
                                            : "brand-btn"
                                    }
                                    onClick={() =>
                                        setSelectedBrand(
                                            brand
                                        )
                                    }
                                >

                                    {brand}

                                </button>

                            )
                        )}

                    </div>


                    {/* PRODUCT GRID */}

                    {filteredProducts.length >
                    0 ? (

                        <div className="products-grid">

                            {filteredProducts.map(
                                (product) => (

                                    <div
                                        key={product.id}
                                        className="product-card"
                                    >


                                        <div className="product-visual">


                                            <div className="product-emoji">

                                                {
                                                    product.emoji
                                                }

                                            </div>


                                            <span className="product-category-tag">

                                                {
                                                    product.category
                                                }

                                            </span>


                                        </div>


                                        <div className="product-content">


                                            <span className="product-brand">

                                                {
                                                    product.brand
                                                }

                                            </span>


                                            <h3>

                                                {
                                                    product.name
                                                }

                                            </h3>


                                            <p>

                                                {
                                                    product.description
                                                }

                                            </p>


                                            <div className="product-card-footer">


                                                <span className="product-price">

                                                    {
                                                        product.price
                                                    }

                                                </span>


                                                <button
                                                    onClick={() =>
                                                        handleProductRequest(
                                                            product
                                                        )
                                                    }
                                                >

                                                    Request

                                                    <ArrowRight
                                                        size={17}
                                                    />

                                                </button>


                                            </div>


                                        </div>


                                    </div>

                                )
                            )}

                        </div>

                    ) : (

                        <div className="no-products">


                            <PackageSearch
                                size={55}
                            />


                            <h2>

                                We couldn't find that item.

                            </h2>


                            <p>

                                Don't worry. Send us a custom request
                                and we'll look for it in Nairobi CBD.

                            </p>


                            <button
                                onClick={() =>
                                    navigate(
                                        "/custom-request"
                                    )
                                }
                            >

                                Request This Item

                                <ArrowRight
                                    size={18}
                                />

                            </button>


                        </div>

                    )}


                    {/* CUSTOM REQUEST */}

                    <div className="products-custom-request">


                        <div className="products-custom-icon">

                            <ShoppingBag
                                size={32}
                            />

                        </div>


                        <div className="products-custom-content">


                            <span>

                                DON'T SEE WHAT YOU NEED?

                            </span>


                            <h2>

                                Send us your exact request.

                            </h2>


                            <p>

                                Tell us the product name, brand,
                                colour, size or any details.
                                We'll search for it in Nairobi CBD
                                and get back to you.

                            </p>


                        </div>


                        <button
                            className="products-custom-btn"
                            onClick={() =>
                                navigate(
                                    "/custom-request"
                                )
                            }
                        >

                            Custom Request

                            <ArrowRight
                                size={19}
                            />

                        </button>


                    </div>


                </div>

            </section>


            {/* ================= HOW IT WORKS ================= */}

            <section className="products-info-section">


                <div className="products-info-container">


                    <div className="products-info-title">

                        <span>

                            HOW INKO EXPRESS WORKS

                        </span>


                        <h2>

                            Found something?

                            <strong>

                                We'll handle it.

                            </strong>

                        </h2>


                    </div>


                    <div className="products-info-steps">


                        <div className="products-info-step">

                            <span>

                                01

                            </span>


                            <div>

                                <h3>

                                    Request the item

                                </h3>


                                <p>

                                    Select a product or describe
                                    exactly what you're looking for.

                                </p>


                            </div>


                        </div>


                        <div className="products-info-step">

                            <span>

                                02

                            </span>


                            <div>

                                <h3>

                                    We find it in CBD

                                </h3>


                                <p>

                                    Our team checks available shops
                                    and confirms the item for you.

                                </p>


                            </div>


                        </div>


                        <div className="products-info-step">

                            <span>

                                03

                            </span>


                            <div>

                                <h3>

                                    We deliver it

                                </h3>


                                <p>

                                    Once everything is confirmed,
                                    we bring your item to you.

                                </p>


                            </div>


                        </div>


                    </div>


                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <Footer/>


        </div>

    );
}


export default Products;