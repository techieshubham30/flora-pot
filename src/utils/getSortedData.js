const getSortedData=(products,SortBy)=>{
    if (SortBy === "price_low_to_high") {
        products.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (SortBy === "price_high_to_low") {
        products.sort((a, b) => {
          return b.price - a.price;
        });
      }
      return products;
}

export {getSortedData};