import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";

import CustomButton from "../../components/CustomButton";
import ImperativeButton from "./components/ImperativeButton";

const UseImperativeHandleExample = (props) => {
  const btnRef = useRef(null);

  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => btnRef.current.alterToggle()}
        style={styles.item}
        title="Button From Parent"
      />
      <ImperativeButton ref={btnRef} />
    </View>
  );
};

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

export default UseImperativeHandleExample;
