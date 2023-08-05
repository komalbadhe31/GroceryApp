import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default  ShopScreen=()=> {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      ShopScreen
      </Text>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});