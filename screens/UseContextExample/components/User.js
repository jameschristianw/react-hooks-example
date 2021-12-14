import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import ExampleContext from "../context/ExampleContext";

const User = (props) => {
  // const { username } = props;

  const { username } = useContext(ExampleContext);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 28 }}>
        User: {username}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
});

export default User;
