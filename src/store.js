import { configureStore } from '@reduxjs/toolkit'
import CartReducer  from './features/CartReducer'
import DataReducer from './features/DataReducer'
export const store = configureStore({
  reducer: {
    cart:CartReducer,
    data:DataReducer
  },
})