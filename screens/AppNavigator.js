import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import UseStateExample from "./UseStateExample";
import UseReducerExample from "./UseReducerExample";
import UseEffectExample from "./UseEffectExample";
import UseRefExample from "./UseRefExample";
import UseLayoutEffectExample from "./UseLayoutEffectExample";
import UseImperativeHandleExample from "./UseImperativeHandleExample/UseImperativeHandleExample";
import UseContextExample from "./UseContextExample/UseContextExample";
import UseMemoExample from "./UseMemoExample";
import UseCallbackExample from "./UseCallbackExample/UseCallbackExample";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "React Hooks Simple Example" }}
      />
      <Stack.Screen name="UseStateExample" component={UseStateExample} />
      <Stack.Screen name="UseReducerExample" component={UseReducerExample} />
      <Stack.Screen name="UseEffectExample" component={UseEffectExample} />
      <Stack.Screen name="UseRefExample" component={UseRefExample} />
      <Stack.Screen
        name="UseLayoutEffectExample"
        component={UseLayoutEffectExample}
      />
      <Stack.Screen
        name="UseImperativeHandleExample"
        component={UseImperativeHandleExample}
      />
      <Stack.Screen name="UseContextExample" component={UseContextExample} />
      <Stack.Screen name="UseMemoExample" component={UseMemoExample} />
      <Stack.Screen name="UseCallbackExample" component={UseCallbackExample} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
