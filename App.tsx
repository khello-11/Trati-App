import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import StartBildschirm from "./src/screens/StartBildschirm";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { Benuteranmeldung } from "./src/screens/Benuteranmeldung";
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartBildschirm">
          <Stack.Screen component={StartBildschirm} name="StartBildschirm" />
          <Stack.Screen component={DashboardScreen} name="Dashboard" />
          <Stack.Screen component={Benuteranmeldung} name="Benuteranmeldung" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    width: 100,
  },
});

export default App;
