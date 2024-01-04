import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, TextProps } from "react-native";

export const DefaultText: React.FC<TextProps> = (props) => {
  const { colors } = useTheme();

  return (
    <Text {...props} style={[{ color: colors.text }, props.style]}>
      {props.children}
    </Text>
  );
};
