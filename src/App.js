import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductListing />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
