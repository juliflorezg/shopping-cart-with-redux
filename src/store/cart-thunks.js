import { notificationVisibilityActions } from './notification-visibility'
import { cartInfoActions } from './cart-info'

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://advanced-redux-42308-default-rtdb.firebaseio.com/cart.json'
      )
      if (!response.ok) {
        throw new Error('Could not fetch cart data')
      }

      const data = await response.json()

      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(cartInfoActions.replaceCart({
        items: cartData.items || [],
        totalItems: cartData.totalItems,
        totalPrice: cartData.totalPrice,
      }))
    } catch (error) {
      dispatch(
        notificationVisibilityActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      )
    }
  }
}

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      notificationVisibilityActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        'https://advanced-redux-42308-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalItems: cart.totalItems,
            totalPrice: cart.totalPrice,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Sending cart data failed')
      }
    }

    try {
      await sendRequest()

      dispatch(
        notificationVisibilityActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully',
        })
      )
    } catch (error) {
      dispatch(
        notificationVisibilityActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      )
    }
  }
}
