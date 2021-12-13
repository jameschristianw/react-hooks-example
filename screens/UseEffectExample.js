import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import CustomButton from "../components/CustomButton";

const UseEffectExample = (props) => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const resetNumber = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.item}>Current Number: {count}</Text>
        <CustomButton
          onPress={increment}
          title="Do Increment"
          style={styles.item}
        />
        <CustomButton
          onPress={resetNumber}
          title="Reset Number"
          style={styles.item}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.item}>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    marginTop: 12,
    paddingHorizontal: 12,
    borderBottomColor: "#c7c7c7",
    borderBottomWidth: 1,
  },
  item: {
    marginBottom: 8,
  },
});

export default UseEffectExample;
