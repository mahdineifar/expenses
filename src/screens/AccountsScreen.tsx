import React from "react";
import { useQuery } from "@tanstack/react-query";
import { DefaultText } from "../shared/DefaultText";
import { getAccounts } from "../sqlite/requests/accounts";
import { ScreenContainerWithAddIcon } from "./ScreenContainerWithAddIcon";

export const AccountsScreen = () => {
  const query = useQuery({ queryKey: ["accounts"], queryFn: getAccounts });

  console.log(query.data);

  return (
    <ScreenContainerWithAddIcon>
      <DefaultText>Accounts!</DefaultText>
    </ScreenContainerWithAddIcon>
  );
};
