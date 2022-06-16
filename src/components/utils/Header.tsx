import React from "react";
import { CenteredRow, Row } from "./Row";
import { TitleText } from "../styles/StyledText";
import IconButton from "../buttons/IconButton";
import { useNavigation } from "@react-navigation/native";
import { View } from "../styles/Themed";

export function Header({
  title,
  navigation,
}: {
  title: string;
  navigation: any;
}) {
  return (
    <View darkColor="#444">
      <CenteredRow>
        <IconButton
          name="menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <TitleText>{title}</TitleText>
      </CenteredRow>
    </View>
  );
}
