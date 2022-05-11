import { View, Text,Button } from 'react-native'
import React from 'react'
import store from './src/app/store';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
// import Cake from './src/features/cake/Cake';
// import Icecream from './src/features/icecream/Icecream';
import Products from './src/components/Products';
import Detail from './src/components/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {

  return(
    <Provider store={store}>
      <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    <View>
    </View>
    </Provider>
  )
}

export default App











{/*       
      <View
      style={{
       paddingTop:10,
       justifyContent:"center",
       alignItems:'center'
      }}
      >
        <Text
        style={{
          fontSize:15,
          fontWeight:'bold'
        }}
        
        > Shop Buy Cake and IceCream</Text>
      </View>
    <Cake/>
    <Icecream/> */}