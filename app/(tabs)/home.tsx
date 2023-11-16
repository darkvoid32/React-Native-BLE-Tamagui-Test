import { StyleSheet } from 'react-native';
import { View } from 'tamagui';
import HomeScreen from '../screens/HomeScreen';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});