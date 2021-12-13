import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  const { onPress, title } = props;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{ ...styles.buttonContainer, ...props.style }}
    >
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
  button: {
    backgroundColor: "#FABB51",
    padding: 12,
    color: "white",
    borderRadius: 8,
    textAlign: "center",
  },
});

export default CustomButton;
