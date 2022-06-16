import { View, Text, ViewProps, useThemeColor } from "../styles/Themed";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { shadow } from "../styles/Shadows";

export default function IconButton(
  props: ViewProps & {
    name: React.ComponentProps<typeof Ionicons>["name"];
    onPress: () => void;
    size?: "s" | "m" | number;
    iconSize?: number;
    color?: string;
    type?: "circle" | "primary";
  }
) {
  const {
    name,
    onPress,
    iconSize,
    color,
    darkColor,
    lightColor,
    ...otherProps
  } = props;

  const iconColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  const size =
    typeof props.size === "number"
      ? props.size
      : props.size === "s"
      ? 20
      : props.size === "m"
      ? 30
      : 25;

  const backgroundColor = useThemeColor(
    { light: undefined, dark: undefined },
    props.type === "circle" ? "secondaryBackground" : "transparent"
  );

  const typeStyles =
    props.type === "circle"
      ? {
          width: 40,
          height: 40,
          borderRadius: 250,
          ...shadow.shadow2,
          backgroundColor,
          alignItems: "center",
          justifyContent: "center",
        }
      : {
          borderWidth: 0,
        };

  return (
    <Pressable
      onPress={onPress}
      // style={
      //   [
      //   ]
      // }
      {...otherProps}
    >
      <View
        style={{
          alignItems: "center",
          ...typeStyles,
          borderRadius: 50,
        }}
      >
        <Ionicons
          name={name}
          size={iconSize || 25}
          color={color || iconColor}
        />
      </View>
    </Pressable>
  );
}
