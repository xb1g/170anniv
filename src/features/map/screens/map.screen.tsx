import { View, Text } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../../../types";
import { Header } from "../../../components/utils/Header";

export default function MapScreen({ navigation }: RootTabScreenProps<"Map">) {
  return (
    <>
      <Header title="Map" navigation={navigation} />
      <View style={{ flex: 1 }}>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
        <Text>map.screen</Text>
      </View>
    </>
  );
}
