import { StyleSheet } from "react-native";

export const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export const buttonStyles = StyleSheet.create({
  roundedButton: {
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 125,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export const flatlistStyles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
  