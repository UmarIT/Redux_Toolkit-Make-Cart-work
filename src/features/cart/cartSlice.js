import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  };

const cartSlice  = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state, action) {
            const existingIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (existingIndex >= 0) {
              state.cartItems[existingIndex] = {
                ...state.cartItems[existingIndex],
                cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
              };
             
            } else {
              let tempProductItem = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProductItem);
             
            }
          
          },
          decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (state.cartItems[itemIndex].cartQuantity > 1) {
              state.cartItems[itemIndex].cartQuantity -= 1;

            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
              const nextCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
              );
      
              state.cartItems = nextCartItems;
            }
          },
        remove(state, action) {
            state.cartItems.map((cartItem) => {
              if (cartItem.id === action.payload.id) {
                const nextCartItems = state.cartItems.filter(
                  (item) => item.id !== cartItem.id
                );
                state.cartItems = nextCartItems;
               
              }
             
              return state;
            });
          },
          getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
          },
    }
})
export const {add,remove,decreaseCart,getTotals} = cartSlice.actions
export default cartSlice.reducer
