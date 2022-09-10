import { createSlice } from '@reduxjs/toolkit'

const cartVisibilitySlice = createSlice({
  name: 'cartVisibility',
  initialState: { isVisible: false },
  reducers: {
    showCart(state) {
      state.isVisible = true
    },
    hideCart(state) {
      state.isVisible = false
    },
  },
})

export const cartVisibilityActions = cartVisibilitySlice.actions

export default cartVisibilitySlice.reducer
