import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NavBar from "../Components/Navbar";

function Home(){
    return(
        <div className="App">
            <NavBar/>
            <Hero/>
            <Footer/>
        </div>
    );
}

export default Home;