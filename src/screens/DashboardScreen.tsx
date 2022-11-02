import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const DashboardScreen = () => {
  const navigation = useNavigation();

  const onButtonPress = () => {
    navigation.navigate("Benuteranmeldung");
  };
  return (
    <View style={styles.container}>
      <Text>Dashborad Screen </Text>
      <Button title="Log In " onPress={onButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
