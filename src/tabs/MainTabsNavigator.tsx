import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { HeaderMenuComponent } from "../components/HeaderMenuComponent";
import { HOME_SCREEN_TAB } from "../constants/routes";
import { HomeScreen } from "./HomeScreen";
import { DataScreen } from "./DataScreen";

const Tab = createBottomTabNavigator();

export const MainTabsNavigator = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => <HeaderMenuComponent />,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          headerTitle: t("homeHeader"),
        }}
        name={HOME_SCREEN_TAB}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name="linechart" size={24} color="black" />
          ),
          headerTitle: t("chartsHeader"),
        }}
        name={t("charts")}
        component={DataScreen}
      />
    </Tab.Navigator>
  );
};
