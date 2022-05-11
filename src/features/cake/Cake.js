import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered,restocked} from './cakeSlice'
const Cake = () => {
    const dispatch = useDispatch()
    const cake = useSelector((state) => state.cake.numOfcake)
  return (
      
    <View style={styles.card_template}>
    <Image
      style={styles.card_image}
      source={require('../images/cake1.jpg')}
  />
    <Text style={styles.card_title}>Cake Remaining: {cake}</Text>
    <View
    style={{
        marginTop:60
    }}>

    <Button
    title='Order Cake'
    onPress={() => dispatch(ordered())}
    />
    </View>
 </View>
     
  )
}

export default Cake

const styles = StyleSheet.create({
    card_template:{
        margin:70,
        width: 250,
        height: 250,
       
      },
      card_image: {
        width: 250,
        height: 250,
        borderRadius : 10
      },
      card_title: {
        position: 'absolute',
        left: 0,
        top: 270,
        fontSize:18
      }
 
})