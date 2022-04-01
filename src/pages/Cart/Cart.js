import "./cart.css";
import { useCart } from "../../context/CartContext";
import { CartCard } from "../../components/CartCard/CartCard";
import { ProductSummary } from "../../components/ProductSummary/ProductSummary";

const Cart = () => {
  const {
    state: { cart },
    setCart,
  } = useCart();
  return (
    <>
      <div className="cart-heading">My Cart({cart.length})</div>
      <div className="wrapper1">
        <div className="cart-wrapper">
          <div className="cart">
            <div className="products">
              {cart.map((item) => (
                <CartCard card={item} key={item._id}/>
              ))}
            </div>
          </div>
        </div>
        <ProductSummary />
      </div>
    </>
  );
};

export { Cart };
