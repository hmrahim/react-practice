import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    let price = 0
    let shipping = 0
    let tax = 0
    let quantity = 0
    for(const data of cart){
        price = price + data.price * data.quantity
        shipping = shipping + data.shipping
        tax = price*10/100


        if(data.quantity==null){
            data.quantity = 1
            
        }else{
            quantity = quantity + data.quantity
            
        }
        

    }
    
    return (
        <div>
            <h1 className='cart-summary'>Cart  summary</h1>
            <div className="cart-info">
                <p>Selected Item: {quantity}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shiping Charge: {shipping}</p>
                <p>Tax: {tax}</p>
                <h1>Grand Total: {price+shipping+tax}</h1>
            </div>
            
        </div>
    );
};

export default Cart;