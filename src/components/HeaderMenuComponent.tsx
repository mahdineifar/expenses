import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  DrawerNavigationProp,
  useDrawerStatus,
} from "@react-navigation/drawer";
import {
  ParamListBase,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const HeaderMenuComponent = () => {
  const isDrawerOpen = useDrawerStatus() === "open";
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <AntDesign
      name={isDrawerOpen ? "menufold" : "menuunfold"}
      onPress={() => navigation.openDrawer()}
      style={styles.container}
      color={colors.primary}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    marginLeft: 8,
  },
});
