import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

const ProductSummary = () => {
  const {
    state: { cart },
  } = useCart();
  const [totalPrice, setTotalPrice] = useState();
  const [totalDiscount, setTotalDiscount] = useState();

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, curr) => {
        return acc + Number(curr.discountPrice)*curr.qty;
      }, 0)
    );

    setTotalDiscount(
      cart.reduce((acc, curr) => {
        return acc + Number(curr.discountPrice) * Number(curr.discount)*curr.qty;
      }, 0)
    );
  }, [cart]);
  return (
    <div className="total-cart">
      <p className="price-details">PRICE DETAILS</p>

      <div className="total-price flex-row">
        <span>Price ({cart.length} items)</span>
        <span>Rs.{totalPrice}</span>
      </div>
      <div className="total-discount flex-row">
        <span>Discount</span>
        <span>-Rs.{totalDiscount / 100}</span>
      </div>
      <div className="delivery-charges flex-row">
        <span>Delivery Charges</span>
        <div className="convenience-price">
          <span className="line-through">Rs.40</span>
          <span className="text-color-primary">FREE</span>
        </div>
      </div>
      <div className="total-amt flex-row">
        <span>Total Amount</span>
        <span>Rs.{Math.ceil(totalPrice - totalDiscount / 100)}</span>
      </div>

      <button className="placeorder-btn">PLACE ORDER</button>
    </div>
  );
};

export { ProductSummary };
