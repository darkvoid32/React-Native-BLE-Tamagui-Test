import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from 'tamagui';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Button onPress={() => console.log('test')} style={styles.tamaguiButton} variant="outlined">Log In</Button>
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
