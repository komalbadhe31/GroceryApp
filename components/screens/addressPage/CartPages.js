import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';
import { Searchbar } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";

export default CartPages =({navigation})=> {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
    <Ionicons name="md-locate" size={24} color="green" />
    <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center',color:'green',marginLeft:8}}>Select the delivery address</Text>
    </View>
      <Searchbar
      placeholder="Search address "
      style={{ borderWeight:5,textSize:8, width:340,borderRadius:60, height:40,marginBottom:120,marginTop:30, marginLeft: 10}} 
      />      

    <Image source = {require('../../../assets/grocery/loc.jpg')}
			style={styles.imgStyle} />

      <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('AddressPage', { name: 'AddressPage' })}
          >
            
          <Ionicons 
		        name="md-add"
            size={26}
			      color="white"
		      />
          <Text style={styles.customBtnText}>Add Address</Text>

        </TouchableOpacity>    
    </View>
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
imgStyle:{
		width: 180,
		height: 170,
		borderRadius: 10,
		marginLeft:10,
    alignSelf:'center',
    marginTop:-40
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
 marginTop: 50,
 marginBottom: 40,
 width : 170,
 height: 40,

 borderRadius: 10,
 alignSelf:'center'
 },
});
