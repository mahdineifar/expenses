import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ADD_ACCOUNT_MODAL } from "../constants/routes";

interface Props {
  children: React.ReactNode;
}

export const ScreenContainerWithAddIcon: FC<Props> = ({ children }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      {children}
      <AntDesign
        name="pluscircleo"
        size={70}
        style={styles.addIcon}
        onPress={() => navigation.navigate(ADD_ACCOUNT_MODAL)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  addIcon: {
    position: "absolute",
    color: "white",
    right: 20,
    bottom: 20,
  },
});
