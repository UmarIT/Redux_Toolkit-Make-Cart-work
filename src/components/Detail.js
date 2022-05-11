import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { remove } from '../features/cart/cartSlice'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
const Detail = () => {
 const SelectItem = useSelector((state) => state.cart)
 const dispatch = useDispatch();
 const handleRemove = (productId) => {
       dispatch(remove(productId));
 }
  return (
    <ScrollView
    style={{flex: 1}}
    >
    {
        SelectItem.map((product) => (
            <Card key={product.id}>
            <Card.Title title='Title' subtitle={product.price} />
            <Card.Content>
              <Title>{product.title}</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: product.image }} />
            <Card.Actions>
              <Button
              onPress={() =>handleRemove(product.id)}>Remove to Cart</Button>
             
            </Card.Actions>
          </Card>
        ))
    }
    </ScrollView>
  )
}

export default Detail