import { createContext } from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
const ProductContext = createContext();

const ProductProvider=({children})=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
     const fetchData = async ()=>{
         try{
            const response = await axios.get("/api/products");
            setProducts(response.data.products)
         }catch(error){
              console.log(error);
         }
     }
     fetchData();
    },[])
    return(
         <ProductContext.Provider value={{products}}>
             {
                 children
             }
         </ProductContext.Provider>
    );
}

const useProduct=()=>{
    return(
        useContext(ProductContext)
    );
}

export {ProductProvider,useProduct};