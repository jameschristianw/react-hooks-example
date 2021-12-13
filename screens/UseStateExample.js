import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../components/CustomButton";

const UseStateExample = (props) => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const increment = () => {
    setCounter(counter + 1);
  };

  const resetNumber = () => {
    setCounter(0);
  };

  const onTextChange = (value) => {
    setText(value);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.item}>Current Number: {counter}</Text>
        <CustomButton
          onPress={increment}
          title="Do Increment"
          style={styles.item}
        />
        <CustomButton
          onPress={resetNumber}
          title="Reset Number"
          style={styles.item}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.item}>Current Text: {text}</Text>
        <TextInput
          placeholder="Type something"
          onChangeText={onTextChange}
          style={{
            marginBottom: 8,
            borderBottomWidth: 1,
            borderBottomColor: "#c7c7c7",
            height: 40,
          }}
          value={text}
        />
        <CustomButton
          onPress={clearText}
          title="Clear Current Text"
          style={styles.item}
        />
      </View>
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

export default UseStateExample;
