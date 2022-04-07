import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./product-card.css";
const ProductCard = ({ products }) => {
  const {
    state: { cart },
    setCart,
  } = useCart();

  const {
    state: {wishlist},
    setWishlist
  } = useWishlist();

  return (
    <div className="card-vertical">
     
      {
        wishlist.some((p)=>p._id === products._id)? (
          <div className="vertical-card-icon" onClick={()=>setWishlist({
           type:"REMOVE_FROM_WISHLIST",
           payload:products
      })} >
        <a href="#" className="fas fa-heart"></a>
      </div>
        ):(
          <div className="vertical-card-icon" onClick={()=>setWishlist({
           type:"ADD_TO_WISHLIST",
           payload:products
      })} >
        <a href="#" class="fas fa-heart"></a>
      </div>
        )
      }
      <div className="card-image">
        <img src={products.image} />
      </div>
      <h3>{products.decription}</h3>
      <div className="rating-container">
        <i className="fas fa-star fa-lg active-rating"></i>
        <i className="fas fa-star fa-lg active-rating"></i>
        <i className="fas fa-star fa-lg "></i>
        <i className="fas fa-star fa-lg"></i>
        <i className="fas fa-star fa-lg"></i>
      </div>

      <div className="price">
        ₹{products.price}{" "}
        <sub>
          {" "}
          <span style={{ textDecoration: "line-through" }}>
            ₹{products.discountPrice}
          </span>{" "}
          ({products.discount}% off)
        </sub>
      </div>
      {cart.some((p) => p._id === products._id) ? (
        <button
          className="card-btn"
          style={{ backgroundColor: "rgb(0,0,0,.60)" }}
          onClick={() => {
            setCart({
              type: "REMOVE_FROM_CART",
              payload: products,
            });
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="card-btn"
          onClick={() => {
            setCart({
              type: "ADD_TO_CART",
              payload: products,
            });
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export { ProductCard };
