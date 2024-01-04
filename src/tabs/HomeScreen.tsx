import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DefaultText } from "../shared/DefaultText";

export const HomeScreen = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <View style={styles.container}>
      <DefaultText>{t("homeText")}</DefaultText>
      <Pressable
        accessibilityRole="button"
        onPress={() => i18n.changeLanguage("fr")}
      >
        <DefaultText>{t("homeText")}</DefaultText>
      </Pressable>
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
