import "./product-listing.css";
import { getSortedData } from "../../utils/getSortedData";
import { Filter } from "../../components/Filter/Filter";
import { useFilter } from "../../context/FilterContext";
import { useProduct } from "../../context/ProductContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { getSortedByRating } from "../../utils/getSortedByRating";
import { getSortedByCategory } from "../../utils/getSortedByCategory";
import { getSortedByBrand } from "../../utils/getSortedByBrand";
const ProductListing = () => {
  const {
    state: { SortBy,byRating,byCategory,byBrand},
    dispatch,
  } = useFilter();



  const { products } = useProduct();
  const sortedData = getSortedData(products, SortBy);
  const sortedByRating = getSortedByRating(sortedData, byRating);
  const sortByCategory = getSortedByCategory(sortedByRating, byCategory);
  const sortByBrand = getSortedByBrand(sortByCategory, byBrand);

  return (
    <div className="wrapper">
      <Filter />
      <div className="product-container">
        {sortByBrand.map((product) => (
          <ProductCard products={product}/>
        ))}
      </div>
    </div>
  );
};

export { ProductListing };
