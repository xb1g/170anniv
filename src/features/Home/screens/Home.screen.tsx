import React from "react";
import { RootTabScreenProps } from "../../../../types";
import { SafeTop } from "../../../components/styles/SafeTop";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/utils/Header";
import { Row } from "../../../components/utils/Row";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <>
      <Header title="Home" navigation={navigation} />
      <View style={{ flex: 1 }}>
        <Text>hom3.screen</Text>
      </View>
    </>
  );
}
