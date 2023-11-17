import { SafeAreaView } from 'react-native';

import { containerStyles } from '../constants/Styles';
import BleScreen from '../screens/BleScreen';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={containerStyles.container}>
      <BleScreen/>
    </SafeAreaView>
  );
}