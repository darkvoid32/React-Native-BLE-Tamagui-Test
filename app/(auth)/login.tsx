import { SafeAreaView } from "react-native";
import { Button } from "tamagui";

import { buttonStyles, containerStyles } from "../constants/Styles";
import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const { setUser } = useAuth();

  const login = () => {
    setUser({
      name: "Test User",
    });
  }

  return (
    <SafeAreaView style={containerStyles.container}>
      <Button onPress={login} style={buttonStyles.roundedButton}>Login</Button>
    </SafeAreaView>
  );
}