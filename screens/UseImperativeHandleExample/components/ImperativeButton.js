import React, { useState, forwardRef, useImperativeHandle } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CustomButton from "../../../components/CustomButton";

const ImperativeButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <View style={styles.container}>
      <CustomButton
        style={styles.item}
        title="Button From Child"
        onPress={() => setToggle(!toggle)}
      />
      {toggle && <Text style={{ fontSize: 28, ...styles.item }}>Toggled</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  item: {
    marginTop: 12,
  },
});

export default ImperativeButton;
