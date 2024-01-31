import React, { useEffect } from "react";
import { View } from "react-native";
import { DefaultText } from "../shared/DefaultText";
import { db } from "../sqlite/DrizzleDB";
import { accounts } from "../../db/schema";

export const AccountsScreen = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await db.select().from(accounts);
      console.log("result");
      console.log(result);
      return result;
    };
    fetchData()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <DefaultText>Settings!</DefaultText>
    </View>
  );
};
