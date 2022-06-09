import { View, Text, Button } from "react-native";
import React from "react";
import { TimeSlot } from "../../../components/time-slot.component";
import { RootStackScreenProps, RootTabScreenProps } from "../../../../types";

export function MainStageScreen({
  navigation,
}: RootTabScreenProps<"MainStage">) {
  const [timeline, setTimeline] = React.useState([]);
  return (
    <View>
      {/* <Button onPress={() => navigation.navigate("Gallery")} title="Go to Details" /> */}
      <TimeSlot timeline={timeline} />
      <Text>main-stage.screen</Text>
    </View>
  );
}
