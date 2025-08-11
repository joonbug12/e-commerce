import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity
import './ShoppingCart.css'; 

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state=>state.cart.cartItems);
    const totalAmount = cartItems.reduce((total,item)=>total+item.price*item.quantity,0);
    //reduce is a function to iterate through each item in the array and return a single value
    //(total,item), total is the running total and the item is the item being currently iterated through
    //total+item.quantity*item.price adds up the total and the 0 is the initial value

    const handleRemoveItem = (itemID) => {
        dispatch(removeItemFromCart(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseItemQuantity);
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseItemQuantity);
    };
  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item=> (
            <li key={item.id} className="cart-item">
                <span>{item.name} - ${item.price}</span>
                <div className="quantity-controls">
                    <button className="quantity-control-btn" onClick={()=>handleDecreaseQuanitity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button classname="quantity-control-btn" onClick={()=>handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-item-btn" onClick={()=>handleRemoveItem(item.id)}>Remove</button>
                <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
                <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>
            </li>
        ))}
      </ul>
      <button className="clear-cart-btn">Clear Cart</button>
    </div>
  
    </>
  );
};

export default ShoppingCart;
