import './product-card.css';
const ProductCard=({products})=>{
    console.log(products);
    return(
         <div className="card-vertical">
                <div className="vertical-card-icon">
                    <a href="#" class="fas fa-heart"></a>
                    {/* <a href="#" class="fas fa-share"></a>
                    <a href="#" class="fas fa-eye"></a> */}
                </div>
                <div className="card-image">
                    <img src={products.image}/>
                </div>
                <h3>{products.decription}</h3>
                <div class="rating-container">
                    <i className="fas fa-star fa-lg active-rating"></i>
                    <i className="fas fa-star fa-lg active-rating"></i>
                    <i className="fas fa-star fa-lg "></i>
                    <i className="fas fa-star fa-lg"></i>
                    <i className="fas fa-star fa-lg"></i>
                </div>
                <div className="quantity">
                    <span>quantity:</span>
                    <input type="number" min="1" max="100"/>
                </div>
                <div className="price">₹{products.price} <sub> <span style={{textDecoration:'line-through'}}>₹{products.discountPrice}</span> ({products.discount}% off)</sub>
                </div>
                <a href="#" className="card-btn">Add To Cart</a>
            </div>

    );
}

export {ProductCard};