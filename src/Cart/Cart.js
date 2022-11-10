import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    console.log(cart)
    let total = 0
    let grandTotal = 0;
    let shipingCharge = 20;
    for (const product of cart) {
        total = total + product.Price
        grandTotal = total + shipingCharge
    }
    return (
        <div>
            <h1>Cart OverView</h1>
            <p>Total Selected: {cart.length}</p>
            <p>Total Price: {total} </p>
            <p>Grand Total : {grandTotal} </p>

            <div className='addedName'>
                {
                    cart.map((data, index) => <h3 key={index}>{data.name}</h3>)
                }
            </div>
        </div>
    );
};

export default Cart;