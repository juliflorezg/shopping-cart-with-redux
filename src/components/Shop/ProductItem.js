import { useDispatch } from 'react-redux'
import { cartInfoActions } from '../../store/cart-info'
import Card from '../UI/Card'
import classes from './ProductItem.module.css'

const ProductItem = props => {
  const { title, price, description } = props
  const dispatch = useDispatch()

  const addItemHandler = () => {
    dispatch(
      cartInfoActions.addItem({
        item: { name: title, price: price, amount: 1 },
      })
    )
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
