import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../Home/HomePage";
import Choice from "../Home/Choice";
import Settings from "../Settings/Settings";
import Contract from "../Contract/Contract";

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer initialRouteName={"HomePage"}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"HomePage"} component={HomePage} />
        <Stack.Screen name={"Settings"} component={Settings} />
        <Stack.Screen name={"Choice"} component={Choice} />
        <Stack.Screen name={"Contract"} component={Contract} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
