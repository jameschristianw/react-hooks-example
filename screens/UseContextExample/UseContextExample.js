import React, { useState, useContext, createContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "./components/Login";
import User from "./components/User";
import ExampleContext from "./context/ExampleContext";

const UseContextExample = (props) => {
  const [username, setUsername] = useState("");

  return (
    <ExampleContext.Provider value={{ username, setUsername }}>
      <View style={styles.container}>
        <Login />
        <User />
      </View>
    </ExampleContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default UseContextExample;
