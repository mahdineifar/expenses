import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { HeaderMenuComponent } from "../components/HeaderMenuComponent";
import { ACCOUNTS_SCREEN_TAB, HOME_SCREEN_TAB } from "../constants/routes";
import { HomeScreen } from "../screens/HomeScreen";
import { DataScreen } from "../screens/DataScreen";
import { AccountsScreen } from "../screens/AccountsScreen";

const Tab = createBottomTabNavigator();

export const MainTabsNavigator = () => {
  const { t } = useTranslation("common");
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => <HeaderMenuComponent />,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name="wallet" size={24} color={colors.primary} />
          ),
          headerTitle: t("accountsHeader"),
        }}
        name={ACCOUNTS_SCREEN_TAB}
        component={AccountsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color={colors.primary} />
          ),
          headerTitle: t("homeHeader"),
        }}
        name={HOME_SCREEN_TAB}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name="linechart" size={24} color={colors.primary} />
          ),
          headerTitle: t("chartsHeader"),
        }}
        name={t("charts")}
        component={DataScreen}
      />
    </Tab.Navigator>
  );
};
