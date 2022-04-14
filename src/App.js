import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Login } from "./pages/Login/Login";
import MockmanEs from "mockman-js";
import { Signup } from "./pages/Signup/Signup";
import { PrivateRouter } from "./context/PrivateRouter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListing />} />
        <Route
          path="/cart"
          element={
            <PrivateRouter>
              <Cart />
            </PrivateRouter>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRouter>
              <Wishlist />
            </PrivateRouter>
          }
        />
        <Route path="/mockman" element={<MockmanEs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
