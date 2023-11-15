import { StyleSheet } from 'react-native';
import { View } from 'tamagui';

import LoginScreen from '../screens/LoginScreen';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
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