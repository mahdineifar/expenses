import React from "react";
import { StyleSheet, View } from "react-native";
import { DefaultText } from "../shared/DefaultText";

export const DataScreen = () => {
  return (
    <View style={styles.container}>
      <DefaultText>Settings!</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
