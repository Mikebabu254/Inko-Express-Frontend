import NavBar from "./Components/Navbar";
import NavBarr from "./Components/NavBarr";

import Hero from "./Components/Hero";
import Heroo from "./Components/Heroo";

import Service from "./Components/Service";

import Work from "./Components/Work";

import Order from "./Components/Order";

import About from "./Components/About";

import Cta from "./Components/Cta";

import Footer from "./Components/Footer";
import Footerr from "./Components/Footerr";

function App() {
  return (
    <div className="App">

      {/* ===== VERSION 1 ===== */}

      <NavBarr />
      <Hero />
      <Service />
      <Work />
      <Order />
      <About />
      <Cta />
      <Footer />

      {/* ===== VERSION 2 ===== */}


      <Heroo />
      <Footerr />

    </div>
  );
}


export default App;