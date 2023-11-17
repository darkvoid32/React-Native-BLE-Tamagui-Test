import React from "react";
import { SafeAreaView } from "react-native";
import { Text, Button } from 'tamagui';

import { buttonStyles, containerStyles } from "../constants/Styles";
import { useAuth } from "../context/AuthProvider";

export default function HomeScreen() {
  const { setUser, user } = useAuth();

  const logOut = () => {
    setUser(null);
  }

  return (
    <SafeAreaView style={containerStyles.container}>
      <Text>Account</Text>
      <Text>{ user && user.name }</Text>
      <Button onPress={logOut} style={buttonStyles.roundedButton} variant="outlined">
        Log Out
      </Button>
    </SafeAreaView>
  );
}