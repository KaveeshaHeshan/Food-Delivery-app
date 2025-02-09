import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='Place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      
      <div className="place-order-right">
      <div className="order-summary">
  <h2>Order Summary</h2>
  <div>
    <div className="order-summary-details">
      <p>Subtotal</p>
      <p>Rs.{getTotalCartAmount()}</p>
    </div>
    <hr />
    <div className="order-summary-details">
      <p>Delivery Fee</p>
      <p>Rs.{2}</p>
    </div>
    <hr />
    <div className="order-summary-details">
      <b>Total</b>
      <b>Rs.{getTotalCartAmount() + 2}</b>
    </div>
  </div>
  <button>PROCEED TO PAYMENT</button>
</div>

      </div>
    </form>
  );
};

export default PlaceOrder;
