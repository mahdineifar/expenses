import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/DrawerNavigator";

import "./src/i18n/i18n.config";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
