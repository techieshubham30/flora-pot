import "./home.css";
import heroImg from "../../images/hero.jpg";
import category2 from "../../images/category2.jpg";
import category3 from "../../images/category3.jpg";
import category4 from "../../images/category4.jpg";

import { CategoryCard } from "../../components/CategoryCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main-content">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-image-content">
          <span>upto 75% off</span>
          <h3>Plant Big Sale Special Offer</h3>
          <Link to="/product" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </div>

      <section className="banner-container">
        <div class="horizontal-card  banner">
          <div class="banner-image-wrapper">
            <img src={category2} alt="plant image" />
          </div>

          <div className="banner-content">
            <span>new arrivals</span>
            <h3>Plants For Gift</h3>
            <Link to="/product" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
        </div>

        <div class="horizontal-card  banner">
          <div class="banner-image-wrapper">
            <img src={heroImg} alt="plant image" />
          </div>

          <div className="banner-content">
            <span>new arrivals</span>
            <h3>office plants</h3>
            <Link to="/product" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <h1 class="category-heading">Featured Categories</h1>
      <section className="category">
        <CategoryCard img={heroImg} category="Indoor Plants" />
        <CategoryCard img={category2} category="Plants For Gift" />
        <CategoryCard img={category3} category="Plants For Office" />
        <CategoryCard img={category4} category="Outdoor Plants" />
      </section>
    </main>
  );
};

export default Home;
