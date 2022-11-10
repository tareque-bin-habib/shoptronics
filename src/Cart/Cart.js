import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { products } = props
    return (
        <div>
            <h1>Cart Overview</h1>
            {
                products.length > 0 && products.map((data, index) => <h2 key={index}>{data}</h2>)
            }
            <div className='Calculation'>
                <h4>Total Price: </h4>
                <h4>Tax: </h4>
                <h3>Grand Total: </h3>
            </div>
        </div>
    );
};

export default Cart;