import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Template = (props) => {
  return (
    <View style={styles.container}>
      <Text>Template Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Template;
