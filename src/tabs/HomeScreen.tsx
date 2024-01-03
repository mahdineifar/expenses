import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const HomeScreen = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <View style={styles.container}>
      <Text>Changer la langue</Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => i18n.changeLanguage("fr")}
      >
        <Text>{t("homeText")}</Text>
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
