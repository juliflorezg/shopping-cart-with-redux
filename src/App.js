import Notification from './components/UI/Notification'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
// import { notificationVisibilityActions } from './store/notification-visibility'
import { sendCartData, fetchCartData } from './store/cart-thunks'

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const isCartVisible = useSelector(state => state.cartVisibility.isVisible)
  const cart = useSelector(state => state.cartInfo)
  const notification = useSelector(state => state.notification.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {

    //~ all of this goes to the thunk in store/cart-info so redux-toolkit executes the internal function and we can use side effects 
    // const sendCartData = async () => {
    // dispatch(
    //   notificationVisibilityActions.showNotification({
    //     status: 'pending',
    //     title: 'Sending...',
    //     message: 'Sending cart data',
    //   })
    // )
    // const response = await fetch(
    //   'https://advanced-redux-42308-default-rtdb.firebaseio.com/cart.json',
    //   { method: 'PUT', body: JSON.stringify(cart) }
    // )

    // if (!response.ok) {
    //   throw new Error('Sending cart data failed')
    // }

    // dispatch(
    //   notificationVisibilityActions.showNotification({
    //     status: 'success',
    //     title: 'Success',
    //     message: 'Sent cart data successfully',
    //   })
    // )
    //}

    if (isInitial) {
      isInitial = false
      return
    }

    if(cart.changed){
      dispatch(sendCartData(cart))

    }


    // sendCartData().catch(error => {
    // dispatch(
    //   notificationVisibilityActions.showNotification({
    //     status: 'error',
    //     title: 'Error!',
    //     message: 'Sending cart data failed!',
    //   })
    // )
    // })
  }, [cart, dispatch])

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
