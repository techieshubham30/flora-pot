import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./wishlist-card.css";

const WishlistCard = ({card}) =>{
    const {
        state:{cart},
        setCart
    } = useCart();

    const {
        state: {wishlist},
        setWishlist
    } = useWishlist();

    return (
        <div className="card-vertical">
        <div className="vertical-card-icon" onClick={()=>setWishlist({
          type:"REMOVE_FROM_WISHLIST",
          payload:card
        })}>
          <a href="#" class="fas fa-heart"></a>
        </div>
        <div className="card-image">
          <img src={card.image} />
        </div>
        <h3>{card.decription}</h3>
        <div className="rating-container">
          <i className="fas fa-star fa-lg active-rating"></i>
          <i className="fas fa-star fa-lg active-rating"></i>
          <i className="fas fa-star fa-lg "></i>
          <i className="fas fa-star fa-lg"></i>
          <i className="fas fa-star fa-lg"></i>
        </div>
  
        <div className="price">
          ₹{card.price}{" "}
          <sub>
            {" "}
            <span style={{ textDecoration: "line-through" }}>
              ₹{card.discountPrice}
            </span>{" "}
            ({card.discount}% off)
          </sub>
        </div>
        {cart.some((p) => p._id === card._id) ? (
          <button
            className="card-btn"
            style={{ backgroundColor: "rgb(0,0,0,.60)" }}
            onClick={() => {
              setCart({
                type: "REMOVE_FROM_CART",
                payload: card,
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
                payload: card,
              });
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    );
}

export {WishlistCard};