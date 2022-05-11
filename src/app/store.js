import {configureStore }from '@reduxjs/toolkit'
import CakeReducer from '../features/cake/cakeSlice'
import IceCreamReducer from '../features/icecream/icecreamSlice'
import CartReducer from '../features/cart/cartSlice'
import ProductReducer from '../features/product/productSlice'
export default configureStore({
 reducer:{
     cake:CakeReducer,
     iceCream:IceCreamReducer,
     cart:CartReducer,
     product:ProductReducer
     

 },
//  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
devTools: true 
})
