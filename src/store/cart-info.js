import { createSlice, current } from '@reduxjs/toolkit'

const initialCartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  changed: false,
}

const cartInfoSlice = createSlice({
  name: 'cartInfo',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalItems = action.payload.totalItems
      state.totalPrice = action.payload.totalPrice
      state.items = action.payload.items
    },
    addItem(state, action) {
      // console.log(action.payload.item)
      const existingItem = state.items.filter(
        item => item.name === action.payload.item.name
      )
      state.changed = true

      // console.log('items array', current(state.items))

      // console.log(existingItem)

      if (existingItem[0]) {
        // const itemIndex = state.items.indexOf(
        //   item => item.name === itemToAdd[0].name
        //   )
        const itemToAdd = state.items.find(
          item => item.name === existingItem[0].name
        )

        // console.log('itemToAdd ->', current(itemToAdd))
        itemToAdd.amount++
        itemToAdd.total = itemToAdd.amount * itemToAdd.price
        state.totalItems++
        state.totalPrice = state.items
          .map(item => item.total)
          .reduce((curr, acc) => {
            return curr + acc
          }, 0)
        // console.log('itemToAdd modified |>', current(itemToAdd))
        // console.log('totalItems modified |>', current(state.totalItems))
        // console.log('totalItems modified |>', state.totalItems)
        // console.log('totalPrice modified |>', state.totalPrice)
        // debugger
        // state.items[itemIndex].amount += action.payload.item.amount
      } else {
        state.items.push({
          ...action.payload.item,
          total: action.payload.item.price,
        })
        state.totalItems++
        state.totalPrice = action.payload.item.price
      }

      // console.log(existingItem)
      // console.log(state.items)
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        item => item.name === action.payload.item.name
      )
      state.changed = true

      if (existingItem.amount - 1 <= 0) {
        state.items = state.items.filter(
          item => item.name !== action.payload.item.name
        )
      } else {
        existingItem.amount--
        existingItem.total = existingItem.amount * existingItem.price
      }
      state.totalItems--
      state.totalPrice = state.items
        .map(item => item.total)
        .reduce((curr, acc) => {
          return curr + acc
        }, 0)
    },
  },
})

export const cartInfoActions = cartInfoSlice.actions

export default cartInfoSlice.reducer
