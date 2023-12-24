import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  isOpen:false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    toggle:(state)=>{
        state.isOpen = !state.isOpen;
    }
  },
})

export const { increment, decrement, incrementByAmount, toggle } = counterSlice.actions

export default counterSlice.reducer