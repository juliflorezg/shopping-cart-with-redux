import { configureStore } from '@reduxjs/toolkit'
import cartVisibilityReducer from './cart-visibility'
import notificationVisibilityReducer from './notification-visibility'
import cartInfoReducer from './cart-info.js'

const store = configureStore({
  reducer: { cartVisibility: cartVisibilityReducer, notification: notificationVisibilityReducer, cartInfo: cartInfoReducer },
})

export default store
