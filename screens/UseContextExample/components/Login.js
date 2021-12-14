import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ExampleContext from "../context/ExampleContext";

const Login = (props) => {
  // const { setUsername } = props;

  const { setUsername } = useContext(ExampleContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ textAlign: "center", fontSize: 28, margin: 12 }}
        onChangeText={(value) => setUsername(value)}
        placeholder="Type Something"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
});

export default Login;
