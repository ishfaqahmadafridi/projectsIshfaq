import React, {  useContext } from 'react'
import './FoodItem.css' // Assuming you have a CSS file for FoodItem
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext' // Adjust the path as needed

const FoodItem = ({ id, name, price, description, image }) => {

 
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="image" className='food-item-image' />
        {
          !cartItems[id]
            ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='add' />
            : <div className="food-item-counter">
              <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} />
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} />
            </div>

        }
      </div>

      <div className="fooditem-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-description'>{description}</p>
        <p className="food-item-price">$
          {
            price
          }
        </p>
      </div>

    </div>
  )
}

export default FoodItem
