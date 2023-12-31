import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default  CategoryScreen=()=> {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      CategoryScreen
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