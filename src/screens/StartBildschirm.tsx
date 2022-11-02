import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const StartBildschirm = () => {
  const navigation = useNavigation();
  const onButtonPress = () => {
    // console.log("Button Pressed");
    navigation.navigate("Dashboard");
  };
  return (
    <View style={styles.container}>
      <Text>StartBildschirm</Text>
      <Button title="Get Start" onPress={onButtonPress} />
    </View>
  );
};

export default StartBildschirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
