import './Product.css'

const Product = ({product}) => {
 const {img, ratings, name, seller, price, quantity} = product
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className='product-info'>
        <h5 className="product-name">{name}</h5>
        <p>Price: ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star</p>
      </div>
      <button className='btn-cart'>Add to Cart</button>
    </div>
  );
};

export default Product;