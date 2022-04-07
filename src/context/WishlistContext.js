import {createContext, useContext, useReducer} from "react";
import { wishlistReducer } from "../Reducer/wishlistReducer";


const WishlistContext = createContext();

const WishlistProvider=({children})=>{
   const [state, setWishlist] = useReducer(wishlistReducer,{
       wishlist:[],
   });

    return (
        <WishlistContext.Provider value={{state, setWishlist}}>
            {
                children
            }
        </WishlistContext.Provider>
    );
}

const useWishlist = () => useContext(WishlistContext);

export {WishlistProvider, useWishlist};