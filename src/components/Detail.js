import { View, Text,ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { remove,decreaseCart,add,getTotals } from '../features/cart/cartSlice'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
const Detail = () => {
 const SelectItem = useSelector((state) => state.cart)
 const dispatch = useDispatch();

 const handleRemove = (product) => {
       dispatch(remove(product));
 }
 const handleDecreaseCart = (product) => {
  dispatch(decreaseCart(product));
};
const handleAddToCart = (product) => {
  dispatch(add(product));
};
useEffect(() => {
  dispatch(getTotals());
}, [SelectItem, dispatch]);

  return (

    <ScrollView
    style={{flex: 1}}
    >
      <View
      style={{
        alignItems:'flex-end',
        justifyContent:'center',
      
        backgroundColor:'black'
      }}
      >
      <Text style={{
       marginRight:40,
       fontSize:18,
       color:'white'
      }}>Total Amount: ${SelectItem.cartTotalAmount}</Text>
      </View>
      
    {
        SelectItem.cartItems.map((product) => (
            <Card key={product.id}>
            <Card.Title title='Price' subtitle={product.price} />
            <Card.Content>
              <Title>{product.title}</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: product.image }} />
            <Card.Actions>
              <Button
              
              onPress={() =>handleRemove(product)}>Remove to Cart</Button>
            
              <Button
              style={{
                marginLeft:20
              }}
               onPress={() => handleDecreaseCart(product)}
              >-</Button>
              <Text
              style={{
                marginLeft:20
              }}>{product.cartQuantity}</Text>
              <Button
              style={{
                marginLeft:20,
                
              }}
              onPress={() => handleAddToCart(product)}
              
              >+</Button>
             <Text
             style={{
              marginLeft:20,
              fontWeight:'bold',
              color:'green'
            }}
             >Price : ${product.price * product.cartQuantity}</Text> 
            </Card.Actions>
          </Card>
        ))
    }
    </ScrollView>
  )
}

export default Detail