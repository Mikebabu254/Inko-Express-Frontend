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
    X
} from "lucide-react";

import "./Products.css";

import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Products() {

    const navigate = useNavigate();
    const { category } = useParams();

    const [searchTerm, setSearchTerm] = useState("");


    /* =========================================
       CATEGORY DATA
    ========================================= */

    const categoryData = {

        phones: {
            title: "Phones & Tablets",
            description:
                "Tell us the phone or tablet you're looking for and we'll search Nairobi CBD shops for you.",
            icon: Smartphone
        },

        computers: {
            title: "Laptops & Computers",
            description:
                "Looking for a laptop, desktop or computer accessory? Tell us what you need and we'll find it.",
            icon: Laptop
        },

        electronics: {
            title: "Electronics",
            description:
                "Find electronics, gadgets and accessories from shops around Nairobi CBD.",
            icon: Headphones
        },

        fashion: {
            title: "Fashion & Clothing",
            description:
                "Tell us what you're looking for — clothes, shoes, bags or accessories — and we'll search for it.",
            icon: Shirt
        },

        "home-office": {
            title: "Home & Office",
            description:
                "Need something for your home, office or workspace? Let us find it for you.",
            icon: House
        },

        documents: {
            title: "Documents & Collection",
            description:
                "Need a document, parcel or purchase collected from Nairobi CBD? We've got you covered.",
            icon: FileText
        }

    };


    /* =========================================
       REQUEST TYPES
       These are NOT products in stock.
       They simply help the customer describe
       what they are looking for.
    ========================================= */

    const requestTypes = {

        phones: [

            {
                id: 1,
                name: "iPhone",
                category: "Smartphone",
                description:
                    "Looking for an iPhone? Tell us the model, storage, colour, condition or budget.",
                emoji: "📱",
                keywords: "iphone apple ios"
            },

            {
                id: 2,
                name: "Samsung",
                category: "Smartphone",
                description:
                    "Looking for a Samsung phone? Tell us the Galaxy model, storage, colour or budget.",
                emoji: "📱",
                keywords: "samsung galaxy android"
            },

            {
                id: 3,
                name: "Other Smartphone",
                category: "Smartphone",
                description:
                    "Looking for Xiaomi, Redmi, Tecno, Infinix, Oppo, Google Pixel or another phone?",
                emoji: "📱",
                keywords:
                    "xiaomi redmi tecno infinix oppo google pixel android"
            },

            {
                id: 4,
                name: "Tablet",
                category: "Tablet",
                description:
                    "Tell us the tablet you're looking for, including brand, model and preferred specifications.",
                emoji: "📲",
                keywords: "ipad tablet samsung tablet"
            }

        ],


        computers: [

            {
                id: 1,
                name: "Laptop",
                category: "Computer",
                description:
                    "Tell us the brand, model, RAM, storage, processor, screen size or your budget.",
                emoji: "💻",
                keywords:
                    "laptop hp dell lenovo apple macbook asus acer"
            },

            {
                id: 2,
                name: "Desktop Computer",
                category: "Computer",
                description:
                    "Need a desktop PC? Tell us whether you want a complete PC or specific components.",
                emoji: "🖥️",
                keywords:
                    "desktop pc computer gaming office"
            },

            {
                id: 3,
                name: "Monitor",
                category: "Computer Accessory",
                description:
                    "Tell us your preferred monitor size, resolution, refresh rate and budget.",
                emoji: "🖥️",
                keywords:
                    "monitor screen display gaming"
            },

            {
                id: 4,
                name: "Computer Accessories",
                category: "Accessories",
                description:
                    "Looking for a keyboard, mouse, webcam, charger, bag or another computer accessory?",
                emoji: "⌨️",
                keywords:
                    "keyboard mouse webcam charger computer accessories"
            }

        ],


        electronics: [

            {
                id: 1,
                name: "Headphones & Earbuds",
                category: "Audio",
                description:
                    "Tell us the brand, type, features and budget you're looking for.",
                emoji: "🎧",
                keywords:
                    "headphones earbuds earphones bluetooth"
            },

            {
                id: 2,
                name: "Speakers",
                category: "Audio",
                description:
                    "Looking for a Bluetooth, portable or home speaker?",
                emoji: "🔊",
                keywords:
                    "speaker bluetooth jbl sound"
            },

            {
                id: 3,
                name: "Smart Watch",
                category: "Wearables",
                description:
                    "Tell us the smartwatch brand, features and budget you prefer.",
                emoji: "⌚",
                keywords:
                    "smartwatch apple watch samsung watch fitness"
            },

            {
                id: 4,
                name: "Chargers & Accessories",
                category: "Accessories",
                description:
                    "Need a charger, cable, adapter, power bank or another accessory?",
                emoji: "🔌",
                keywords:
                    "charger cable adapter powerbank usb"
            }

        ],


        fashion: [

            {
                id: 1,
                name: "Men's Clothing",
                category: "Clothing",
                description:
                    "Tell us what you're looking for, including size, colour, style and budget.",
                emoji: "👔",
                keywords:
                    "men shirt trousers jeans jacket clothes"
            },

            {
                id: 2,
                name: "Women's Clothing",
                category: "Clothing",
                description:
                    "Tell us the type, size, colour, style and budget you're looking for.",
                emoji: "👗",
                keywords:
                    "women dress tops trousers clothes fashion"
            },

            {
                id: 3,
                name: "Shoes & Sneakers",
                category: "Shoes",
                description:
                    "Tell us your shoe type, size, preferred brand, colour and budget.",
                emoji: "👟",
                keywords:
                    "shoes sneakers nike adidas boots"
            },

            {
                id: 4,
                name: "Bags & Accessories",
                category: "Accessories",
                description:
                    "Looking for a handbag, backpack, travel bag, wallet or another accessory?",
                emoji: "👜",
                keywords:
                    "bag backpack handbag wallet accessories"
            }

        ],


        "home-office": [

            {
                id: 1,
                name: "Office Furniture",
                category: "Office",
                description:
                    "Looking for a desk, office chair, cabinet or other office furniture?",
                emoji: "🪑",
                keywords:
                    "office chair desk furniture cabinet"
            },

            {
                id: 2,
                name: "Office Equipment",
                category: "Office",
                description:
                    "Tell us what office equipment you're looking for.",
                emoji: "🖨️",
                keywords:
                    "printer scanner office equipment"
            },

            {
                id: 3,
                name: "Home Essentials",
                category: "Home",
                description:
                    "Looking for something for your home? Tell us what you need.",
                emoji: "🏠",
                keywords:
                    "home household kitchen appliance"
            }

        ],


        documents: [

            {
                id: 1,
                name: "Document Collection",
                category: "Documents",
                description:
                    "We'll collect your documents from a location within Nairobi CBD.",
                emoji: "📄",
                keywords:
                    "document collect papers office"
            },

            {
                id: 2,
                name: "Parcel Collection",
                category: "Collection",
                description:
                    "Have a parcel waiting in CBD? We'll collect and deliver it to you.",
                emoji: "📦",
                keywords:
                    "parcel package collection pickup"
            },

            {
                id: 3,
                name: "Shop Pickup",
                category: "Collection",
                description:
                    "Already bought something? We can collect it from the shop and deliver it.",
                emoji: "🛍️",
                keywords:
                    "shop pickup purchase collection delivery"
            }

        ]

    };


    /* =========================================
       CURRENT CATEGORY
    ========================================= */

    const currentCategory =
        categoryData[category] || categoryData.phones;


    const currentRequests =
        requestTypes[category] || requestTypes.phones;


    const CategoryIcon = currentCategory.icon;


    /* =========================================
       SEARCH
    ========================================= */

    const filteredRequests = useMemo(() => {

        const search = searchTerm.toLowerCase().trim();

        if (!search) {
            return currentRequests;
        }

        return currentRequests.filter((item) => {

            return (
                item.name.toLowerCase().includes(search) ||
                item.description.toLowerCase().includes(search) ||
                item.keywords.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search)
            );

        });

    }, [searchTerm, currentRequests]);


    /* =========================================
       REQUEST HANDLER
    ========================================= */

    const handleRequest = (request) => {

        navigate("/custom-request", {

            state: {

                product: request.name,

                category: currentCategory.title,

                requestType: request.category

            }

        });

    };


    /* =========================================
       GENERAL CUSTOM REQUEST
    ========================================= */

    const handleCustomRequest = () => {

        navigate("/custom-request", {

            state: {

                category: currentCategory.title

            }

        });

    };


    return (

        <div className="products-page">

            <NavBar />


            {/* =========================================
                HERO
            ========================================= */}

            <section className="products-hero">

                <div className="products-hero-container">

                    <button
                        className="products-back-btn"
                        onClick={() => navigate("/category")}
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

                                WHAT ARE YOU LOOKING FOR?

                            </span>


                            <h1>

                                {currentCategory.title}

                            </h1>


                            <p>

                                {currentCategory.description}

                            </p>

                        </div>

                    </div>


                    {/* SEARCH */}

                    <div className="products-search-wrapper">

                        <Search size={21} />

                        <input
                            type="text"
                            placeholder="Search for what you need..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                        />


                        {searchTerm && (

                            <button
                                className="clear-search"
                                onClick={() => setSearchTerm("")}
                            >

                                <X size={18} />

                            </button>

                        )}

                    </div>

                </div>

            </section>


            {/* =========================================
                REQUEST OPTIONS
            ========================================= */}

            <section className="products-section">

                <div className="products-container">


                    <div className="products-section-header">

                        <div>

                            <span className="products-label">

                                START YOUR REQUEST

                            </span>

                            <h2>

                                What are you looking for?

                            </h2>

                            <p className="products-section-description">

                                Choose an option below or tell us exactly
                                what you want. We don't need to have the
                                item listed — we'll search for it in Nairobi CBD.

                            </p>

                        </div>


                        <div className="products-count">

                            <span>

                                {filteredRequests.length} options

                            </span>

                        </div>

                    </div>


                    {/* =========================================
                        REQUEST GRID
                    ========================================= */}

                    {filteredRequests.length > 0 ? (

                        <div className="products-grid">

                            {filteredRequests.map((request) => (

                                <div
                                    key={request.id}
                                    className="product-card"
                                >

                                    <div className="product-visual">

                                        <div className="product-emoji">

                                            {request.emoji}

                                        </div>


                                        <span className="product-category-tag">

                                            {request.category}

                                        </span>

                                    </div>


                                    <div className="product-content">

                                        <span className="product-brand">

                                            INKO EXPRESS

                                        </span>


                                        <h3>

                                            {request.name}

                                        </h3>


                                        <p>

                                            {request.description}

                                        </p>


                                        <div className="product-card-footer">

                                            <span className="product-price">

                                                Request

                                            </span>


                                            <button
                                                onClick={() =>
                                                    handleRequest(request)
                                                }
                                            >

                                                Tell Us More

                                                <ArrowRight size={17} />

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="no-products">

                            <PackageSearch size={55} />

                            <h2>

                                We don't have that listed.

                            </h2>

                            <p>

                                That's okay. Tell us exactly what you're
                                looking for and we'll search for it in
                                Nairobi CBD.

                            </p>


                            <button
                                onClick={handleCustomRequest}
                            >

                                Request This Item

                                <ArrowRight size={18} />

                            </button>

                        </div>

                    )}


                    {/* =========================================
                        CUSTOM REQUEST
                    ========================================= */}

                    <div className="products-custom-request">

                        <div className="products-custom-icon">

                            <ShoppingBag size={32} />

                        </div>


                        <div className="products-custom-content">

                            <span>

                                CAN'T FIND WHAT YOU NEED?

                            </span>


                            <h2>

                                Just tell us what you want.

                            </h2>


                            <p>

                                You don't have to choose from our options.
                                Tell us the exact product you're looking for,
                                including the model, brand, colour, size,
                                specifications or budget.

                            </p>

                        </div>


                        <button
                            className="products-custom-btn"
                            onClick={handleCustomRequest}
                        >

                            Make a Request

                            <ArrowRight size={19} />

                        </button>

                    </div>

                </div>

            </section>


            {/* =========================================
                HOW IT WORKS
            ========================================= */}

            <section className="products-info-section">

                <div className="products-info-container">


                    <div className="products-info-title">

                        <span>

                            HOW INKO EXPRESS WORKS

                        </span>


                        <h2>

                            You tell us what you need.

                            <strong>

                                We find it.

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

                                    Describe what you want

                                </h3>


                                <p>

                                    Choose a request type or tell us exactly
                                    what you're looking for.

                                </p>

                            </div>

                        </div>


                        <div className="products-info-step">

                            <span>

                                02

                            </span>


                            <div>

                                <h3>

                                    We search CBD shops

                                </h3>


                                <p>

                                    Our agent checks shops and suppliers
                                    around Nairobi CBD to find suitable options.

                                </p>

                            </div>

                        </div>


                        <div className="products-info-step">

                            <span>

                                03

                            </span>


                            <div>

                                <h3>

                                    We confirm with you

                                </h3>


                                <p>

                                    We'll send you the available option,
                                    price and other details before buying.

                                </p>

                            </div>

                        </div>


                        <div className="products-info-step">

                            <span>

                                04

                            </span>


                            <div>

                                <h3>

                                    We deliver it

                                </h3>


                                <p>

                                    Once you approve the purchase, we collect
                                    the item and deliver it to you.

                                </p>

                            </div>

                        </div>


                    </div>

                </div>

            </section>


            <Footer />

        </div>

    );

}


export default Products;

