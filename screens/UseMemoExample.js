import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

import CustomButton from "../components/CustomButton";

const UseMemoExample = (props) => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    console.log("FINDING LONGEST NAME");
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) longestName = currentName;
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, textAlign: "center" }}>
        {getLongestName}
      </Text>
      <CustomButton
        style={styles.item}
        title="Toggle"
        onPress={() => setToggle(!toggle)}
      />
      {toggle && <Text style={{ fontSize: 24, ...styles.item }}>Toggled</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
  },
  item: {
    marginTop: 12,
    textAlign: "center",
  },
});

export default UseMemoExample;
