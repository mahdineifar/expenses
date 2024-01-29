import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import { DrawerNavigator } from "./src/DrawerNavigator";
import { DarkTheme } from "./src/shared/DarkTheme";

import "./src/i18n/i18n.config";

const expo = openDatabaseSync("expenses.db");
const db = drizzle(expo);

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
