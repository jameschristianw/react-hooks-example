import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const UseLayoutEffectExample = (props) => {
  // RUNS FIRST
  useLayoutEffect(() => {
    console.log("UseLayoutEffect");
  }, []);

  // RUNS THEN
  useEffect(() => {
    console.log("UseEffect");
  }, []);

  return (
    <View style={styles.container}>
      <Text>See terminal/console to see the log</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12,
  },
});

export default UseLayoutEffectExample;
