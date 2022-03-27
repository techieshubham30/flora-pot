
import { useFilter } from '../../context/FilterContext';
import './filter.css';



const Filter=()=>{
    const {state:{SortBy,byCategory,byBrand},dispatch} = useFilter();
    return(
        <div className="product-filter-container">
            <div className="filter-titles">
                <span className="filter">FILTERS</span>
                <span className="clear-all-btn" onClick={()=>dispatch({type:"clear_all"})}>CLEAR ALL</span>
            </div>

            <ul className="filter-section">
                <li className="filter-section-title">
                    SORT
                </li>

                <li>
                    <label className="form-label">
                        <input type="radio" name="sort" class="form-checkbox-field"
                            onChange={()=>dispatch({type:"Sort_By_Price", payload:"price_high_to_low"})}
                            checked={SortBy==="price_high_to_low"?true:false}
                        />
                        Price High to Low
                    </label>
                </li>
                <li>
                    <label className="form-label">
                        <input type="radio" name="sort" class="form-checkbox-field"
                         onChange={()=>dispatch({type:"Sort_By_Price", payload:"price_low_to_high"})}
                        checked={SortBy==="price_low_to_high"?true:false}
                        />
                        Price Low to High
                    </label>
                </li>

                <div className="divider-line"></div>
                <li className="filter-section-title">
                    CATEGORIES
                </li>
                <li>
                    <label className="form-label">
                        <input type="checkbox" class="form-checkbox-field"
                            onChange={()=>dispatch({type:"air_purifier_plants"})}
                            checked={byCategory.air_purifier}
                        />
                        Air Purifier Plants
                    </label>
                </li>
                <li>
                    <label className="form-label">
                        <input type="checkbox" class="form-checkbox-field"
                             onChange={()=>dispatch({type:"indoor_plants"})}
                            checked={byCategory.indoor_plants}
                        />
                        Indoor Plants
                    </label>
                </li>
                <li>
                    <label className="form-label">
                        <input type="checkbox" class="form-checkbox-field"
                              onChange={()=>dispatch({type:"outdoor_flower_plants"})}
                              checked={byCategory.outdoor_flower_plants}
                        />
                        Outdoor Flower Plants
                    </label>
                </li>
                <li>
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox-field"
                             onChange={()=>dispatch({type:"plants_for_gifts"})}
                              checked={byCategory.plants_for_gifts}
                        />
                        Plants For Gift
                    </label>
                </li>
                <div className="divider-line"></div>
                <li className="filter-section-title">
                    BRAND
                </li>

                <li>
                    <label className="form-label">
                        <input type="checkbox" class="form-checkbox-field"
                            onChange={()=>dispatch({type:"thronic"})}
                            checked={byBrand.thronic}
                        />
                        Thronic
                    </label>
                </li>
                <li>
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox-field"
                             onChange={()=>dispatch({type:"ferns_n_petals"})}
                            checked={byBrand.ferns_n_petals}
                        />
                        Ferns N Petals
                    </label>
                </li>
                <li>
                    <label className="form-label">
                        <input type="checkbox" className="form-checkbox-field"
                              onChange={()=>dispatch({type:"abana_homes"})}
                              checked={byBrand.abana_homes}
                        />
                        Abana Homes
                    </label>
                </li>
                <li>
                    <label className="form-label">
                        <input type="checkbox" class="form-checkbox-field"
                               onChange={()=>dispatch({type:"root_bridges"})}
                               checked={byBrand.root_bridges}
                        />
                        Root Bridges
                    </label>
                </li>
                <div className="divider-line"></div>

                <li className="filter-section-title">
                    CUSTOMER REVIEWS
                </li>

                <li className="rating">
                    <div className="rating-container" onClick={()=>dispatch({type:"Filter_By_Rating",payload:4})}>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg"></i>
                        <span>& Up</span>
                    </div>
                    <div className="rating-container" onClick={()=>dispatch({type:"Filter_By_Rating",payload:3})}>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg"></i>
                        <i className="fas fa-star fa-lg"></i>
                        <span>& Up</span>
                    </div>
                    <div className="rating-container" onClick={()=>dispatch({type:"Filter_By_Rating",payload:2})}>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg active-rating"></i>
                        <i className="fas fa-star fa-lg "></i>
                        <i className="fas fa-star fa-lg"></i>
                        <i className="fas fa-star fa-lg"></i>
                        <span>& Up</span>
                    </div>
                </li>
            </ul>
        </div>

    );
}

export {Filter};