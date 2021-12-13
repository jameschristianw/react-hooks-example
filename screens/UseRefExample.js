import React, { useRef } from "react";
import { View, Text, StyleSheet, TextInput, Keyboard } from "react-native";

import CustomButton from "../components/CustomButton";

const UseRefExample = (props) => {
  const inputRef = useRef(null);

  const onPress = () => {
    // NOT RECOMMENDED TO GET VALUE
    // console.log(inputRef.current.value);
    // console.log(inputRef.current);

    // GOOD TO GET FOCUS / CLEAR
    // BUT BETTER USE useState
    inputRef.current.focus();
    inputRef.current.clear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.item}>Current Name: James</Text>
        <TextInput
          placeholder="Type something"
          // onChangeText={onTextChange}
          style={{
            marginBottom: 8,
            borderBottomWidth: 1,
            borderBottomColor: "#c7c7c7",
            height: 40,
          }}
          ref={inputRef}
          // value={text}
        />
        <CustomButton onPress={onPress} title="Focus Me" style={styles.item} />
        <CustomButton
          onPress={() => Keyboard.dismiss()}
          title="Unfocus Me"
          style={styles.item}
        />
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

export default UseRefExample;
