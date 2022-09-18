import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant:{
  _id:null,
  imgUrl:null,
  title:null,
  rating:null,
  address:null,
  genre:null,
  short_description:null,
  dishes:null,
  },
};

export const restruentSlice = createSlice({
  name:'restaurant',
  initialState,
  reducers: {
    setRestruarent:(state,action) => {
      state.restaurant = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setRestruarent } = restruentSlice.actions
export const selectRestruarent = (state) => state.restaurant.restaurant;



export default restruentSlice.reducer