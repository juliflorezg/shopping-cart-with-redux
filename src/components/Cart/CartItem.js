import { useDispatch } from 'react-redux'
import { cartInfoActions } from '../../store/cart-info'
import classes from './CartItem.module.css'

const CartItem = props => {
  const { title, quantity, total, price } = props.item

  const dispatch = useDispatch()

  const removeItemHandler = () => {
    dispatch(
      cartInfoActions.removeItem({
        item: { name: title, price: price, amount: 1 },
      })
    )
  }
  const addItemHandler = () => {
    dispatch(
      cartInfoActions.addItem({
        item: { name: title, price: price, amount: 1 },
      })
    )
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
