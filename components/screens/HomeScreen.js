import React,{useState} from "react";
import { Text, View, Image, StyleSheet,Button, SectionList,FlatList, Pressable,Dimensions } from "react-native";
const {height, width} = Dimensions.get('window');

const ListItem = ({ item }) => {
	return (
	  <View style={styles.item}>
		<Image
		  source={{
			uri: item.uri,
		  }}
		  style={styles.itemPhoto}
		  resizeMode="cover"
		/>
		<Text style={styles.itemText}>{item.text}</Text>
	  </View>
	);
  };

  const SECTIONS = [
	{
	  title: '',
	  horizontal: true,
	  data: [
		{
		  key: '1',
		  text: 'Spinach',
		  price: '100$',
		  quantity: 'per pc',
		  uri: 'https://m.media-amazon.com/images/I/51T3025eGcL._AC_UF1000,1000_QL80_.jpg',
		},
		{
		  key: '2',
		  text: 'Carrot',
		  price: '100$',
		  quantity: '1 kg',
		  uri: 'https://shop.organicmandya.com/cdn/shop/products/1NjnqfBEDCZF8soVFB1u_0FH1FjKsrzLt_3a52a355-c738-41f7-bfd5-944049aa184a_700x700.jpg?v=1608550591',
		},
  
		{
		  key: '3',
		  text: 'Tomato',
		  price: '100$',
		  quantity: '1 kg',
		  uri: 'https://www.jiomart.com/images/product/original/590003517/tomato-1-kg-product-images-o590003517-p590003517-0-202203170629.jpg?im=Resize=(1000,1000)',
		},
		{
		  key: '4',
		  text: 'Potato',
		  price: '100$',
		  quantity: '1 kg',
		  uri: 'https://m.media-amazon.com/images/I/61yXL70-RaL._AC_UF1000,1000_QL80_.jpg',
		},
		{
		  key: '5',
		  text: 'Onion',
		  price: '100$',
		  quantity: '1 kg',
		  uri: 'https://m.media-amazon.com/images/I/619D1OTIYnL._AC_UF1000,1000_QL80_.jpg',
		},
	  ],
	},
	
  ];


const HomeScreen = () => {

	const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
	

	return (

		<View style = {{flexDirection:'column'}}>
		<View style = {styles.box}>
			<View>
			<Image source = {require('../../assets/grocery/g1.jpg')}
			style={styles.imgStyle} />
			<Text style={styles.txtStyle}> Grocery</Text>
			</View>
			<View>
			<Image source = {require('../../assets/grocery/art.jpg')}
			style={styles.imgStyle} />
			<Text style={styles.txtStyle}> Art & craft</Text>
			</View>
			<View>
			<Image source = {require('../../assets/grocery/food.jpg')}
			style={styles.imgStyle} />
			<Text style={styles.txtStyle}>    Food</Text>
			</View>
			<View>
			<Image source = {require('../../assets/grocery/fasion.jpg')}
			style={styles.imgStyle} />
			<Text style={styles.txtStyle}> Fasion </Text>
			</View>
			<View>
			<Image source = {require('../../assets/grocery/pharma.jpg')}
			style={styles.imgStyle} />
			<Text style={styles.txtStyle}> Pharma</Text>
			</View>
		</View >
		
			<View>

			<FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View>

					<Image source = {require('../../assets/grocery/ad1.jpg')}
			            style={{marginTop:30,height:140,width:width-90,marginLeft:30}} />

              </View>
            );
          }}
        />
		
		<View
        style={{
          flexDirection: 'row',
          width: width-50,
		marginTop:20,
		marginLeft:140
        }}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: currentIndex == index ? 30 : 8,
                height: currentIndex == index ? 10 : 8,
                borderRadius: currentIndex == index ? 5 : 4,
                backgroundColor: currentIndex == index ? 'green' : 'gray',
                marginLeft: 5,
              }}></View>
          );
        })}
      </View>

		</View>
			
		<SectionList
          contentContainerStyle={{ paddingHorizontal: 5 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
	
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => 
					<View style={styles.itemContainer}>
				  <ListItem   item={item}/>
					<View style = {{flexDirection:'row',marginLeft:10,marginBottom:10}}>
						<View>
				  <Text style={styles.text1}>{item.quantity}</Text>
				  <Text style={styles.text1}>{item.price}</Text>
				  </View>

				  <Pressable style={styles.button} >
      				<Text style={styles.text}>Add</Text>
    			</Pressable>
				</View>
				  </View>
 
				}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
		</View>

	);
  };
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: 'white',
	  justifyContent: 'center',
	  alignItems: 'center',
	},

	box: {
		flexDirection:'row',
		width: 500,
		height: 90,		
		backgroundColor: 'indigo'
	 },

	 imgStyle:{
		width: 60,
		height: 60,
		borderRadius: 60 / 2,
		marginLeft:10
		  },
	txtStyle:{
		color:'white',
		marginLeft:10
	},
	sectionHeader: {
		fontWeight: '800',
		fontSize: 18,
		color: '#f4f4f4',
	  },
	  item: {
		margin: 10,
	  },
	  itemPhoto: {
		width: 100,
		height: 100,
	  },
	  itemText: {
		color: 'black',
		marginTop: 5,
	  },
	  itemContainer: {
		width: 120,
		marginRight: 10,
		borderRadius:10,
		marginTop:10,
		borderColor:'grey',
		borderWidth:1,
	  },
	  button: {
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'green',
		height: 20,
		width: 30,
		marginLeft:30
	  },
	  text: {
		fontSize: 12,
		lineHeight: 21,
		fontWeight: '500',
		letterSpacing: 0.25,
		color: 'white',
		marginLeft:3
	  },
	  text1: {
		fontSize: 10,
		color: 'black',
	  },
  });
  
  export default HomeScreen;