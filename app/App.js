// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./src/screens/StartScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { IconButton } from "react-native-paper";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomWidth: 0,
            // height: 85,
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          cardStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: "",
          })}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: "",
            headerTransparent: true,
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                color="#000"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
