import React from "react";
import { RootTabScreenProps } from "../../../../types";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/utils/Header";

export default function ChapelScreen({
  navigation,
}: RootTabScreenProps<"Chapel">) {
  return (
    <>
      <Header title="Chapel" navigation={navigation} />
      <View>
        <Text>Timeline.screen</Text>
      </View>
    </>
  );
}
