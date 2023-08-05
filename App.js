import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import { Button,  Provider,Searchbar } from 'react-native-paper';
import React, { useState, useEffect } from "react";
import Dashboard from './components/dashboard';
import ActionBarImage from './components/ActionBarImage';
import { Entypo } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();
const MyStack = () => {

  const countries = ["location 1","location 2","location 3"];

  const Stack1 = createStackNavigator();
  var isIcon=true;
  const clearUserData = () => ({
    type: 'CLEAR_USER_DATA',
  });
  
  return (
    
    <Stack.Navigator
      initialRouteName="Dashboard"
      
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'indigo',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontSize: 0,
          
        },
      }}>

      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options=
       {({route, navigation}) => ({ 
       headerTitleAlign: 'center',
       headerStatusBarHeight:150,
       headerLeft: () => (
        <>
        
      <View       
      style={[
        styles.container,
        {
          flexDirection: 'row',
          
        },
      ]}> 
      <Entypo name="location-pin" size={28} color="white" />

    <SelectDropdown
              data={countries}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
            }}
              defaultButtonText="location 1"              
              buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
              rowTextForSelection={(item, index) => {return item}}
       />  
         <ActionBarImage
          menuText="Menu"
          textStyle={{color: 'white'}}
          navigation={navigation}
          route={route}
          isIcon={true}
        />
      
      </View>  
      
      <Searchbar
      placeholder=""
      style={{ textSize:8, width:340,borderRadius:60, height:30,marginBottom:120,marginTop:20, marginLeft: 10,textAlign:'Justify'}}  
      />
      </>
      ),
     
       })}   
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
HeadStyle: { 
  height: 50,
  justifyContent: 'center',
  alignContent: "center",  
  marginLeft: "auto",
  marginRight: "auto", 
},
TableText: { 
  margin: 10,
  justifyContent: 'center',
  alignContent: 'center',
  marginLeft:'auto',
  marginRight:'auto',
},
dropdown: {
    height: 30,
    width:150,

    paddingHorizontal: 1,
 
    marginRight:0,
    

  },
  dropdown1BtnTxtStyle: {
    color: 'transperant', 
    textAlign: 'left',
    fontSize: 14
  },

  textStyle1: {
padding:20,
marginLeft:10,
color:'darkmagenta',
fontWeight:'bold',
fontSize:16
}


});

