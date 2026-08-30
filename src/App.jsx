import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Cartegory";
import Products from "./Pages/Products";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route path="/category" element={<Category/>}/>
        <Route path="/products/:category" element={<Products/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;