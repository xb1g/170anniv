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
    <View darkColor="#262626">
      <CenteredRow>
        <IconButton
          style={{ margin: 5, marginLeft: 10 }}
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
