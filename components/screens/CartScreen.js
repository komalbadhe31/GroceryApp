import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddressPage from './addressPage/AddressPage';
import CartPages from "./addressPage/CartPages";

const Stack = createStackNavigator();

const CartScreen = ({navigation}) => {
  
   return (
      <NavigationContainer  independent={true}>
      <Stack.Navigator
      initialRouteName="CartPages"
      >
        
	  <Stack.Screen 
         name="CartPages" 
         component={CartPages} 
         options={{ headerShown:false, headerLeft: null }} />  
    
    <Stack.Screen 
         name="AddressPage" 
         component={AddressPage} 
         options={{ 
          title: 'Add Adress', headerStyle: {
          backgroundColor: 'indigo',
          
       }, headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white'
       }} />  
	  
      </Stack.Navigator>
      </NavigationContainer>
   );
};
export default CartScreen;








