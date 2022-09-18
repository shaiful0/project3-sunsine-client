import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './basketSlice/basketSlice'
import restaurantReducer from './basketSlice/restruentSlice'

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    restaurant: restaurantReducer,
  },
})