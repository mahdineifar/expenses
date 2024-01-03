import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { useTranslation } from "react-i18next";
import { MainTabsNavigator } from "./tabs/MainTabsNavigator";
import { SettingsScreen } from "./screens/SettingsScreen";
import { HeaderMenuComponent } from "./components/HeaderMenuComponent";
import { DRAWER_MAIN_SCREEN, SETTINGS_SCREEN } from "./constants/routes";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { t } = useTranslation("common");

  return (
    <Drawer.Navigator
      initialRouteName={DRAWER_MAIN_SCREEN}
      screenOptions={{
        headerLeft: () => <HeaderMenuComponent />,
      }}
    >
      <Drawer.Screen
        name={DRAWER_MAIN_SCREEN}
        options={{ headerShown: false, title: t("mainScreenDrawerTitle") }}
        component={MainTabsNavigator}
      />
      <Drawer.Screen
        name={SETTINGS_SCREEN}
        options={{ title: t("settingsDrawerTitle") }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
