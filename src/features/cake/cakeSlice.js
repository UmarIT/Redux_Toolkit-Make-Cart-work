
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    numOfcake:10
}
const cakeSlice = createSlice({
    name: 'cake',
  initialState,
  reducers:{
      ordered:(state) => {
             state.numOfcake--
      },
      restocked:(state,action) =>{
          state.numOfcake += 1
      },
  }
})

export const {ordered,restocked} = cakeSlice.actions
export default cakeSlice.reducer
