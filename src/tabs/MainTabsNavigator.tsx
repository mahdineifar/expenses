import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { HomeScreen } from "./HomeScreen";
import { DataScreen } from "./DataScreen";

const Tab = createBottomTabNavigator();

export const MainTabsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          }}
          name="Accueil"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="linechart" size={24} color="black" />
            ),
          }}
          name="Statistiques"
          component={DataScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
