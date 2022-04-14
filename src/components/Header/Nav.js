import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "../../services/signoutServices";
const Nav = () => {
  const naviagte = useNavigate();
  const {
    state: { cart },
  } = useCart();
  const {
    state: { wishlist },
  } = useWishlist();

  const {
    auth: { isAuthenticated },
    setAuth,
  } = useAuth();

  return (
    <header className="header">
      <nav className="navbar">
        <div class="nav-left">
          <Link to="/" class="logo">
            <i className="fas fa-seedling"></i>
            Florapot
          </Link>
          <ul class="nav-links">
            <li class="nav-items">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-items">
              <Link to="/product">Shop Now</Link>
            </li>
          </ul>
        </div>

        <div class="nav-right">
          <form class="search-bar-container">
            <label for="search-bar" class="fas fa-search" />
            <input type="text" class="search-bar" placeholder="search here" />
          </form>

          <div class="icon-container">
            <Link to="/" class="fas fa-user-circle"></Link>
            <div class="badge-container">
              <Link to="/wishlist" class="fas fa-heart"></Link>
              <span class="badge-icon">{wishlist.length}</span>
            </div>
            <div class="badge-container">
              <Link to="/cart" class="fas fa-shopping-cart"></Link>
              <span class="badge-icon">{cart.length}</span>
            </div>
            <div className="badge-container">
              {!isAuthenticated ? (
                <Link to="/login">
                  <button className="signin-btn">Login</button>
                </Link>
              ) : (
                <button
                  className="signin-btn"
                  onClick={() => signOut(naviagte, setAuth)}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
