import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../components/CustomButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    case "reset":
      return { count: 0, showText: true };
    default:
      return state;
  }
};

const UseReducerExample = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  const defaultText = "This is the default text";

  const increment = () => {
    dispatch({ type: "increment" });
    dispatch({ type: "toggleShowText" });
  };

  const resetNumber = () => {
    dispatch({ type: "reset" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.item}>Current Number: {state.count}</Text>
        <CustomButton
          onPress={increment}
          title="Do Increment"
          style={styles.item}
        />
        <CustomButton onPress={resetNumber} title="Reset" style={styles.item} />
      </View>
      {state.showText && (
        <View style={styles.section}>
          <Text style={styles.item}>Current Text: {defaultText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    marginTop: 12,
    paddingHorizontal: 12,
    borderBottomColor: "#c7c7c7",
    borderBottomWidth: 1,
  },
  item: {
    marginBottom: 8,
  },
});

export default UseReducerExample;
