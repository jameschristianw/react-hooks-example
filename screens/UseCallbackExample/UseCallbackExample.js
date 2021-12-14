import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../../components/CustomButton";
import ChildComponent from "./components/ChildComponent";

const UseCallbackExample = (props) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("This is a sentence");

  const returnComment = useCallback(() => {
    return data;
  }, [data]);

  return (
    <View style={styles.container}>
      <ChildComponent returnComment={returnComment} />

      <CustomButton
        style={styles.item}
        title="Button From Child"
        onPress={() => setToggle(!toggle)}
      />
      {toggle && <Text style={{ fontSize: 28, ...styles.item }}>{data}</Text>}
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

export default UseCallbackExample;
