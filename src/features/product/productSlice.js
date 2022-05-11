import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
// This slice is use for api calling..!!
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice  = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
   
    extraReducers:(builder) => {
   builder
   .addCase(fetchProducts.pending, (state,action) =>{
       state.status = STATUSES.LOADING
   })
   .addCase(fetchProducts.fulfilled, (state,action) => {
       state.status = STATUSES.IDLE
       state.data= action.payload

   })
   .addCase(fetchProducts,(state,action) => {
       state.status = STATUSES.ERROR
   })
    }
})

export const fetchProducts = createAsyncThunk('products/fetch',async () =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data
})

export default productSlice.reducer
