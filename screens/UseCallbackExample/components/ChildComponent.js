import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ChildComponent = (props) => {
  const { returnComment } = props;

  useEffect(() => {
    console.log("useEffect in ChildComponent");
  }, [returnComment]);

  return (
    <View style={styles.container}>
      <Text style={styles.item}>{returnComment()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 12,
    backgroundColor: "#fff",
  },
  item: {
    fontSize: 24,
  },
});

export default ChildComponent;
