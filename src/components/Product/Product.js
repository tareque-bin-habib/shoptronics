import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const { addToCart, } = props;
    const { img, name, ratings, Seller, Price } = props.product
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className='card-details'>
                <h3>{name}</h3>
                <h5>Ratings: {ratings} Start</h5>
                <h5>Seller: {Seller}</h5>
                <h5>Price: {Price}</h5>
            </div>
            <button onClick={() => addToCart(props.product)} className='addToCartBtn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;