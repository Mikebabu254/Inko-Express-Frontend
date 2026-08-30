import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Cartegory";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route path="/category" element={<Category/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;