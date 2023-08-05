import React, {useState, Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';


const ActionBarImage = ({isIcon, menuText, textStyle, route, navigation}) => {

  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
 
  const clearUserData = () => ({
    type: 'CLEAR_USER_DATA',
  });

  return (
    <View style={{ flexDirection: 'row' }}>
        <Menu
        visible={visible}
        anchor={isIcon ? (
          <TouchableOpacity onPress={showMenu}>
            <Image
                source={require('../assets/doctor.png')}
                  
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  marginLeft: 130,
                  
                }}
              />
          </TouchableOpacity>
        ) : (
          <Text
            onPress={showMenu}
            style={textStyle}>
            {menuText}
          </Text>
        )}
        onRequestClose={hideMenu}
      >

        <MenuItem
        onPress={() => { 
          
          hideMenu();
        }}
        >
          Profile
        </MenuItem>
        
        <MenuItem

        >Logout</MenuItem>

        <MenuDivider />
      </Menu>
    </View>
  );
};

export default  ActionBarImage;
