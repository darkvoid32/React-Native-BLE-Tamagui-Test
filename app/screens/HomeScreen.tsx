import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, Button } from 'tamagui';
import { useAuth } from "../context/AuthProvider";

export default function HomeScreen() {
  const { setUser, user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Account</Text>
      <Text>{ user && user.name }</Text>
      <Button onPress={() => setUser(null)} style={styles.tamaguiButton} variant="outlined">
        Log Out
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tamaguiButton: {
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 125,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});