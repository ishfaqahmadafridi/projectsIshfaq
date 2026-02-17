import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount
  } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const deliveryFee = 2;
  const Total = subtotal + deliveryFee;

  return (
    <div className='cart'>
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
          const itemQuantity = cartItems[item.id?.toString()] || 0;

          if (itemQuantity > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-item-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{itemQuantity}</p>
                  <p>Rs. {item.price * itemQuantity}</p>
                  <p
                    onClick={() => removeFromCart(item.id)}
                    className='cross'
                    style={{ cursor: 'pointer' }}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }

          return null;
        })}
      </div>

      <div className="cart-bottom">
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
              <p>Rs. {getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={() => {
            navigate("/order")
          }}>Proceed to Checkout</button>
        </div>

        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='Promo code' name='promoCode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
