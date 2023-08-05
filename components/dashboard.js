import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ShopScreen from "./screens/ShopScreen";
import CartScreen from "./screens/CartScreen";

const TabNavigator = createMaterialBottomTabNavigator(
{
	Home: {
	screen: HomeScreen,

	navigationOptions: {
		tabBarLabel: "Home",
		tabBarIcon: () => (
		<Ionicons
			name="md-home"
			size={28}
			color= 'indigo'
		/>
		),
	},
	},
	
	Category: {
	screen: CategoryScreen,
	
	navigationOptions: {
		tabBarLabel: "Category",
		tabBarIcon: () => (
		<Ionicons
			name="ios-apps"
			size= {28}
			color='indigo'
		/>
		),
		
	},
	},

	Shop: {
		screen: ShopScreen,
		navigationOptions: {
			tabBarLabel: "Shop",
			tabBarIcon: () => (
				<Entypo name="shop" size={28} color="indigo" />
			),
		},
		},

    CartScreen: {
	screen: CartScreen,
	navigationOptions: {
		tabBarLabel: "Cart",
		tabBarIcon: () => (
			<Entypo name="shopping-cart" size={28} color="indigo" />
		),
	},
	},
},
{
	initialRouteName: "Home",
	barStyle: {
		borderWidth: 0.5,
		borderBottomWidth: 1,
		backgroundColor:'#E4ECF2',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderColor: 'transparent',
		overflow: 'hidden',
	},  
}
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
return (
	<Navigator>
	<HomeScreen />
	</Navigator>
);
}