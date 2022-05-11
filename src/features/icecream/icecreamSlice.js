import { createSlice } from '@reduxjs/toolkit'
const initialState={
    numOficeCream:20
}
const IceCreamSlice  = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
         
            state.numOficeCream--

        },
        restocked:(state,action) => {
            state.numOficeCream += action.payload
        }
    }
})
export const {ordered,restocked} = IceCreamSlice.actions
export default IceCreamSlice.reducer
