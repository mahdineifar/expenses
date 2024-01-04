import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/DrawerNavigator";

import "./src/i18n/i18n.config";
import { DarkTheme } from "./src/shared/DarkTheme";

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
