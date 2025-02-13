import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      let val = 0
      
      const {cartList} = value
      value = cartList.map(each => val += each.price * each.quantity)
      
      return (
        <div className="order-container">
          <h1 className="order-heading">
            Order total: <span className="amount">{val}</span>
          </h1>
          <p className="cart-items">{cartList.length} items in cart</p>
          <button className="checkout-button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer> 
)
export default CartSummary
