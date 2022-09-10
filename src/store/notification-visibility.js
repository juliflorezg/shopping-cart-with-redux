import { createSlice } from '@reduxjs/toolkit'

const notificationVisibilitySlice = createSlice({
  name: 'notificationVisibility',
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        // isVisible: true,
      }
    },
  },
})

export const notificationVisibilityActions = notificationVisibilitySlice.actions

export default notificationVisibilitySlice.reducer
