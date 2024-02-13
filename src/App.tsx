import * as React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import {
  ConfigType,
  ToastPosition,
  ToastProvider,
} from "react-native-toast-animated";
import migrations from "../db/outputs/migrations";
import { DrawerNavigator } from "./navigation/DrawerNavigator";
import { DarkTheme } from "./shared/DarkTheme";
import { db } from "./sqlite/DrizzleDB";

import "./i18n/i18n.config";

const config: ConfigType = {
  position: ToastPosition.TOP,
};

const App = () => {
  useMigrations(db, migrations);

  return (
    <NavigationContainer theme={DarkTheme}>
      <ToastProvider config={config}>
        <DrawerNavigator />
      </ToastProvider>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
