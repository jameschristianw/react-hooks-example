import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = (props) => {
  const { navigation, route } = props;

  const onPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Text>See useState Example</Text>
        <CustomButton
          onPress={() => onPress("UseStateExample")}
          title="See Example"
        />
      </View>
      <View style={styles.item}>
        <Text>See useReducer Example</Text>
        <CustomButton
          onPress={() => onPress("UseReducerExample")}
          title="See Example"
        />
      </View>
      <View style={styles.item}>
        <Text>See useEffect Example</Text>
        <CustomButton
          onPress={() => onPress("UseEffectExample")}
          title="See Example"
        />
      </View>
      <View style={styles.item}>
        <Text>See useRef Example</Text>
        <CustomButton
          onPress={() => onPress("UseRefExample")}
          title="See Example"
        />
      </View>
      <View style={styles.item}>
        <Text>See useLayoutEffect Example</Text>
        <CustomButton
          onPress={() => onPress("UseLayoutEffectExample")}
          title="See Example"
        />
      </View>
      <View style={styles.item}>
        <Text>See useImperativeHandle Example</Text>
        <CustomButton
          onPress={() => onPress("UseImperativeHandleExample")}
          title="See Example"
        />
      </View>
      <View style={styles.item}>
        <Text>See useContext Example</Text>
        <CustomButton
          onPress={() => onPress("UseContextExample")}
          title="See Example"
        />
      </View>
      <View style={styles.item}>
        <Text>See useMemo Example</Text>
        <CustomButton
          onPress={() => onPress("UseMemoExample")}
          title="See Example"
        />
      </View>
      <View style={styles.item}>
        <Text>See useCallback Example</Text>
        <CustomButton
          onPress={() => onPress("UseCallbackExample")}
          title="See Example"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 12,
    borderBottomColor: "#c7c7c7",
    borderBottomWidth: 1,
  },
});

export default HomeScreen;
