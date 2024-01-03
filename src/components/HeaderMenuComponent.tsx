import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDrawerStatus } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const HeaderMenuComponent = () => {
  const isDrawerOpen = useDrawerStatus() === "open";
  const navigation = useNavigation();

  return (
    <AntDesign
      name={isDrawerOpen ? "menufold" : "menuunfold"}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    marginLeft: 8,
  },
});
