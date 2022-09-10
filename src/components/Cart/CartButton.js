import { useSelector, useDispatch } from 'react-redux'
import { cartVisibilityActions } from '../../store/cart-visibility'

import classes from './CartButton.module.css'

const CartButton = props => {
  const isCartVisible = useSelector(state => state.cartVisibility.isVisible)
  const totalItems = useSelector(state => state.cartInfo.totalItems)
  const dispatch = useDispatch()

  const toggleCartHandler = () => {
    isCartVisible
      ? dispatch(cartVisibilityActions.hideCart())
      : dispatch(cartVisibilityActions.showCart())
  }

  return (
    <button
      className={isCartVisible ? classes['button-active'] : classes.button}
      onClick={toggleCartHandler}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  )
}

export default CartButton
