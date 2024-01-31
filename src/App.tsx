import * as React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../db/outputs/migrations";
import { DrawerNavigator } from "./navigation/DrawerNavigator";
import { DarkTheme } from "./shared/DarkTheme";
import { db } from "./sqlite/DrizzleDB";

import "./i18n/i18n.config";

const App = () => {
  const { success, error } = useMigrations(db, migrations);

  console.log(success);
  console.log(error);

  return (
    <NavigationContainer theme={DarkTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
