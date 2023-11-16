import { StyleSheet } from 'react-native';
import { View } from 'tamagui';

import BleScreen from '../screens/BleScreen';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <BleScreen/>
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