import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    console.log(cart)
    let total = 0
    // for (const product of cart) {
    //     total = total + product.Price

    // }
    return (
        <div>
            <h1>Cart Overview</h1>
            <div className='Calculation'>
                <p>Item Selected: {cart.length}</p>
                <p>Total Price: {total} </p>
                <p>Tax: </p>
                <h3>Grand Total: </h3>
            </div>
            {
                cart.length > 0 && cart.map((data, index) => <h2 key={index}>{data}</h2>)
            }
        </div>
    );
};

export default Cart;