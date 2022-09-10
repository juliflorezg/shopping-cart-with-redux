import ProductItem from './ProductItem'
import classes from './Products.module.css'

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="TV"
          price={2000}
          description="Gaming TV, 65 inch 4k 60hz HDR 600 nits peak brightness"
        />
        <ProductItem
          title="Soundbar"
          price={250}
          description="Gaming soundbar, full ranger drivers, USB-C support, bluetooth 5.2"
        />
      </ul>
    </section>
  )
}

export default Products
