import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import UseStateExample from "./UseStateExample";
import UseReducerExample from "./UseReducerExample";
import UseEffectExample from "./UseEffectExample";
import UseRefExample from "./UseRefExample";
import UseLayoutEffectExample from "./UseLayoutEffectExample";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UseStateExample" component={UseStateExample} />
      <Stack.Screen name="UseReducerExample" component={UseReducerExample} />
      <Stack.Screen name="UseEffectExample" component={UseEffectExample} />
      <Stack.Screen name="UseRefExample" component={UseRefExample} />
      <Stack.Screen name="UseLayoutEffectExample" component={UseLayoutEffectExample} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
