import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { DefaultText } from "../shared/DefaultText";

export const SettingsScreen = () => {
  const { t } = useTranslation("settings");

  return (
    <View style={styles.container}>
      <DefaultText>{t("settingsText")}</DefaultText>
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
