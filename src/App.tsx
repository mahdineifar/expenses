import * as React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./tabs/DrawerNavigator";
import { DarkTheme } from "./shared/DarkTheme";

import "./i18n/i18n.config";

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
