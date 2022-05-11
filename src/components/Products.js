import { View, Text,ScrollView, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useDispatch,useSelector } from 'react-redux';
import {add}  from '../features/cart/cartSlice';
import { fetchProducts } from '../features/product/productSlice';

import { STATUSES } from '../features/product/productSlice';

const Products = ({navigation}) => {
  const dispatch = useDispatch()
  // const [product, setProducts] = useState([])
const{data: products, status }= useSelector( state => state.product)
  const SelectedItem = useSelector( state => state.cart)

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   console.log(data.length)
    //   setProducts(data)
    // }
    dispatch(fetchProducts())

  }, [])
  const handleAdd = (product) => {
      dispatch(add(product));
  }
  if (status === STATUSES.LOADING) {
    return <Text>Loading....</Text>
}

if (status === STATUSES.ERROR) {
    return <Text>Something went wrong!</Text>;
}
  return (
    <ScrollView 
    style={{flex: 1}}
    >
      <View
      style={{
        marginTop:30,
        marginBottom:20,
         
      }}
      >
        <View 
         style={{
           justifyContent:'center',
           alignItems:'flex-end',
           marginRight:10,
           marginBottom:20
         }}
        >
        <Text
        style={{
          fontSize:17,
          fontWeight:'bold'
        }}
        > Cart items: {SelectedItem.length}</Text>
        </View>
      
      <Button
     onPress={() =>navigation.navigate('Detail')}
      mode="contained"
      >Cart Screen

        </Button>
      </View>
      
      {
        products.map(product => (
          <Card key={product.id}>
            <Card.Title title='Title' subtitle={product.price} />
            <Card.Content>
              <Title>{product.title}</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: product.image }} />
            <Card.Actions>
              <Button
              onPress={() =>handleAdd(product)}>ADD TO CART</Button>
             
            </Card.Actions>
          </Card>
        ))
      }
    </ScrollView>
   
  )
}

export default Products