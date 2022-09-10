import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Cart = props => {
  const cartItems = useSelector(state => state.cartInfo.items)

  useEffect(() => {
    // console.log(cartItems)
  }, [cartItems])

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            item={{
              title: item.name,
              quantity: item.amount,
              total: item.total,
              price: item.price,
            }}
            key={item.name + item.price}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart
