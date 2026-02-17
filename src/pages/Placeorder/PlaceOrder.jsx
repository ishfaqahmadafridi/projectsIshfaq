import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext);

  return (
  
      <form className='placeorder-form'>
        <div className="placeorder-form-left">
          <p>Delivery Information</p>
          <div className="multi-feild">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="Email" placeholder='Email Address' />
          <input type="text" placeholder='Street' />

          <div className="multi-feild">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='Province' />
          </div>

          <div className="multi-feild">
            <input type="text" placeholder='zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />

        </div>
        <div className="placeorder-right">

          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className='cart-total-detail'>
                <p>SubTotal</p>
                <p>Rs. {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className='cart-total-detail'>
                <p>Delivery Fee</p>
                <p>Rs. {2}</p>
              </div>
              <hr />
              <div className='cart-total-detail'>
                <p>Total</p>
                <p>Rs. {getTotalCartAmount()+2}</p>
              </div>
            </div>
            <button >Proceed to Payment</button>
          </div>
          </div>

      </form>

  )
}

export default PlaceOrder
