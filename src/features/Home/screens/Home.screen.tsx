import React from "react";
import { SafeTop } from "../../../components/styles/SafeTop";
import { Text, View } from "../../../components/Themed";
import { Row } from "../../../components/utils/Row";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, flexDirection: "row-reverse" }}>
      {/* <SafeTop /> */}
      <>
        <Text>asdas</Text>
        <Text>asdas</Text>
        <Text>asdas</Text>
        <View style={{ flexDirection: "row-reverse" }}>
          <Text>asdas</Text>
        </View>
      </>
      <Text>hom3.screen</Text>
    </View>
  );
}
