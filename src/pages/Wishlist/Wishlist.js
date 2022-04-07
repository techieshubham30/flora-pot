import { useWishlist } from "../../context/WishlistContext";
import { WishlistCard} from "../../components/WishlistCard.js/WishlistCard";


const Wishlist = () => {
  const {
      state:{wishlist},
      setWishlist
  } = useWishlist();
  console.log(wishlist);
  return (
    <>
      <div class="wishlist-heading">My Wishlist</div>
      <div class="product-container ">
        {wishlist.map((item) => (
          <WishlistCard card={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export { Wishlist };
