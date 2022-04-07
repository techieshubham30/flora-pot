import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Wishlist } from "../../pages/Wishlist/Wishlist";
import "./cart-card.css";
const CartCard = ({ card }) => {
  const { price, discount, discountPrice, decription, image, _id } = card;
  const { setCart } = useCart();
  const {state:{wishlist},
   setWishlist
  } = useWishlist();
  return (
    <div className="horizontal-card">
      <div className="horizontal-card-image-wrapper">
        <img src={image} alt={card.decription} />
      </div>
      <div className="product-info">
        <h3 className="product-decription"> {decription}</h3>

        <div className="price">
          ₹{price}{" "}
          <sub>
            {" "}
            <span style={{ textDecoration: "line-through" }}>
              ₹{discountPrice}
            </span>{" "}
            ({discount}% off)
          </sub>
        </div>

        <div className="quantity">
          <span>qty: </span>
          <input type="number" min="1" max="100" value={card.qty}  onChange={(e)=>{
            setCart({
              type:"CHANGE_CART_QUANTITY",
              payload:{
                _id:card._id,
                qty:e.target.value
              }
            })
          }} />
        </div>
        <div className="product-buttons">
          <button
            className="btn"
            onClick={() => {
              setCart({
                type: "REMOVE_FROM_CART",
                payload: card,
              });
            }}
          >
            Remove
          </button>

          {

            wishlist.some((p)=>p._id===card._id) ? (
              <button className="btn" onClick={()=>{
                setWishlist({
                 type:"REMOVE_FROM_WISHLIST",
                 payload:card
               })
             
              }} >Move To Wishlist
             </button>
            ) : (
              <button className="btn" onClick={()=>{
                setWishlist({
                 type:"ADD_TO_WISHLIST",
                 payload:card
               })

               setCart({
                type: "REMOVE_FROM_CART",
                payload: card,
              })

              }} >Move To Wishlist
             </button>
            )

          }

        </div>
      </div>
    </div>
  );
};

export { CartCard };
