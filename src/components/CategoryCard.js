import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  return (
    <div class="vertical-card category-cotainer">
      <div class="card-image-container category-image-wrapper">
        <img src={props.img} alt="plant image" />
      </div>

      <div class="category-content">
        <h3>{props.category}</h3>
        <Link to="/product" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export { CategoryCard };
