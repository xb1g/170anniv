import React from "react";
import { RootTabScreenProps } from "../../../../types";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/utils/Header";

export default function GamezoneScreen({
  navigation,
}: RootTabScreenProps<"Gamezone">) {
  return (
    <>
      <Header title="Gamezone" navigation={navigation} />
      <View>
        <Text>Gamezone.screen</Text>
      </View>
    </>
  );
}
