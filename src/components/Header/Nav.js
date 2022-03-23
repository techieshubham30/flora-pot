import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
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
              <Link to="/" class="fas fa-heart"></Link>
              <span class="badge-icon">4</span>
            </div>
            <div class="badge-container">
              <Link to="/" class="fas fa-shopping-cart"></Link>
              <span class="badge-icon">2</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
