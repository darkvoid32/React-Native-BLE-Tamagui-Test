import { View } from "react-native";
import { Button } from "tamagui";
import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const { setUser } = useAuth();

  const login = () => {
    setUser({
      name: "Test User",
    });
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={login}>Login</Button>
    </View>
  );
}