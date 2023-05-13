import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/cartSlice'
import "./Cart.css"


const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <div className="image"><img src={product.image} alt="" /></div>
            <div className="text">
              <h5>{product.title}</h5>
              <p>{product.price}</p>
              <button
                className="btn"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button></div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
