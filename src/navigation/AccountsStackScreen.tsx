import React from "react";
import { useTranslation } from "react-i18next";
import { createStackNavigator } from "@react-navigation/stack";
import { AddAccountModal } from "../screens/AddAccountModal";
import { ACCOUNTS_STACK_SCREEN, ADD_ACCOUNT_MODAL } from "../constants/routes";
import { AccountsScreen } from "../screens/AccountsScreen";
import { HeaderMenuComponent } from "../components/HeaderMenuComponent";

const RootStack = createStackNavigator();

export const AccountsStackScreen = () => {
  const { t } = useTranslation("common");

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name={ACCOUNTS_STACK_SCREEN}
          component={AccountsScreen}
          options={{
            headerLeft: () => <HeaderMenuComponent />,
            headerTitle: t("accountsHeader"),
          }}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{ presentation: "modal", gestureEnabled: true }}
      >
        <RootStack.Screen
          name={ADD_ACCOUNT_MODAL}
          component={AddAccountModal}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
