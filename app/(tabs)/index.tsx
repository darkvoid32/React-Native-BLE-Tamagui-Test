import { SafeAreaView } from 'react-native';

import { containerStyles } from '../constants/Styles';
import HomeScreen from '../screens/HomeScreen';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={containerStyles.container}>
      <HomeScreen/>
    </SafeAreaView>
  );
}