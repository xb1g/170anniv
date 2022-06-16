import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ViewProps } from "./Themed";

export function SafeTop(props: ViewProps) {
  if (Platform.OS === "web") {
    return <View {...props} />;
  } else {
    const insets = useSafeAreaInsets();
    console.log("SafeTop insets:", insets);
    const { style, lightColor, darkColor, ...otherProps } = props;
    return (
      <View
        style={[
          {
            height: insets.top,
            backgroundColor: "transparent",
          },
          style,
        ]}
        {...otherProps}
      />
    );
  }
}

export function SafeBottom(props: ViewProps) {
  if (Platform.OS === "web") {
    return <View {...props} />;
  } else {
    const insets = useSafeAreaInsets();
    const { style, lightColor, darkColor, ...otherProps } = props;
    return (
      <View
        style={[
          {
            height: insets.bottom,
            backgroundColor: "transparent",
          },
          style,
        ]}
        {...otherProps}
      />
    );
  }
}
