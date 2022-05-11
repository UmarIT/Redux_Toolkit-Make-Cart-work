import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered,restocked} from './icecreamSlice'
const Icecream = () => {
    const dispatch = useDispatch()
    const icecream = useSelector((state) => state.iceCream.numOficeCream)
  return (
    <View style={styles.card_template}>
    <Image
      style={styles.card_image}
      source={require('../images/icecream2.jpg')}
  />
  
    <Text style={styles.card_title}>Icecream Remaining: {icecream}</Text>
    <View
    style={{
        marginTop:60
    }}>

    <Button
    title='Order IceCream'
    onPress={() => dispatch(ordered())}
    />
    </View>
 </View>
  )
}

export default Icecream

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
        fontSize:18,
      
      }
 
})