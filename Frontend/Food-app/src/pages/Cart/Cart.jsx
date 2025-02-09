import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigator = useNavigate();

  return (
    <div className="Cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-item-title cart-items-title" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Rs.{item.price * 100}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs.{item.price * 100 * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">X</p>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Summary Section */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart total details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart total details">
              <p>Delivery fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart total details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigator('/place-order')}>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code Section */}
        <div className="cart-promocode">
          <div>
            <p>Add your promo code for instant savings.</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;