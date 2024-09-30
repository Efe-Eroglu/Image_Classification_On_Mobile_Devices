import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../Home/HomePage";

const Stack = createStackNavigator();

const AppNavigationContainer = ()=>{
    return(
        <NavigationContainer initialRouteName={"HomePage"}>
            <Stack.Navigator>
                <Stack.Screen name = {"HomePage"} component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigationContainer;