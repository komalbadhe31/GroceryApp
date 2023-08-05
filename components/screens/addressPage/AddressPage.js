import { Text, View, StyleSheet,TouchableOpacity,Image,Pressable} from 'react-native';
import {useState} from "react";
import Constants from 'expo-constants';
import { Input } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const AddressPage = ({navigation}) => {

const [checked, setChecked] = useState(1); 

  return (
    <ScrollView>
    <View style={styles.container}>

        <View style={{flexDirection:'row',backgroundColor:'#E3DBF5',height:80,width:340,borderRadius:10,}}>
            <View style ={{marginTop:20, marginLeft:20}}>
            <Entypo name="location" size={34} color="black"/>
            </View>
            <View style={{marginLeft:33}}>
                <Text style={{marginTop:15,fontSize:10}}>413033</Text>
                <Text style={{fontWeight:'bold'}}>Paud Road...</Text>
                <Text style={{marginTop:2,fontSize:12}}>Kothrud, Pune city</Text>
            </View>
            <View style={{marginLeft:40,marginTop:10}}>
            <Pressable style={[styles.PressableStyle,{backgroundColor: 'transperant',width:80,height:35},]} >
              <Text style={{color:"black",fontWeight:"600",textAlign:"center",fontSize:10}}>Chnage</Text>
            </Pressable>

            </View>

        </View>
    
       <View style={{marginTop:10}}>
        <TextInput
        style={{marginTop:10}}
        required
        label='HOUSE/ FLAT /BLOCK NO.'
      />
        <TextInput style={{marginTop:10}}
        label='BUILDING/ SOCIETY NAME'
      />
      </View>

        <TextInput style={{marginTop:10}}
        label='LANDMARK (OTIONAL)'
      />

      <Text style={{marginTop:10,fontWeight:'bold'}}> SAVE AS </Text>

              <View style={{ marginLeft: 20, flexDirection:'row' }}>

          <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked === 1 ? "indigo" : 'transperant',},]} 
          onPress={() => {
            setChecked(1); 
          }}>
            <Text style={{color:checked === 1 ? "white":"black",fontWeight:"600",textAlign:"center"}}>Home</Text>
          </Pressable>

          <Pressable style={[styles.PressableStyle,{backgroundColor:checked === 2 ? "indigo" : 'transperant'},]}
          onPress={() => {
              setChecked(2); 
           }}>
            <Text style={{color:checked === 2?"white":"black",fontWeight:"600",textAlign:"center"}}>Work</Text>
          </Pressable>

        <Pressable 
          style={[styles.PressableStyle,{backgroundColor:checked === 3 ? "indigo" : 'transperant',},]} 
          onPress={() => {
            setChecked(3);
          }}>
            <Text style={{color:checked === 3?"white":"black",fontWeight:"600",textAlign:"center"}}>Other</Text>
          </Pressable>
        </View>  

      <TouchableOpacity
          style={styles.customBtnBG}>
          <Text style={styles.customBtnText}>Save Address</Text>

        </TouchableOpacity>    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  customBtnText: {
    fontSize: 15,

    fontWeight: '400',
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
},
 
 customBtnBG: {
    flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: "indigo",
   marginTop: 30,
   marginBottom: 40,
   width : 170,
   height: 40,
  
   borderRadius: 10,
   alignSelf:'center'
   },

 PressableStyle: {
   borderColor: 'black',
   borderWidth:1,
  padding: 10,
    width:60,
    height:40,
    borderRadius: 25,
    marginTop: 10,
    marginLeft:10
  },
  
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});

export default AddressPage;
