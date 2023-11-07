import "./Product.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
  import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Product = ({ product, handleAddToCart }) => {
  const { img, ratings, name, seller, price, quantity } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price: ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        Add to Cart
        <FontAwesomeIcon id="carticon-customized" icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
