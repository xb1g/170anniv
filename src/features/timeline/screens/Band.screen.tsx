import React, { useContext } from "react";
import { Button, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RootTabScreenProps, TimelineScreenProps } from "../../../../types";
import { Text, View } from "../../../components/Themed";
import { AllContext } from "../../../contexts/AllContext";

export default function BandScreen({
  navigation,
  route,
}: TimelineScreenProps<"Band">) {
  const { name } = route.params;
  const { smallBands } = useContext(AllContext);
  const [band, setBand] = React.useState(
    smallBands.find((b) => b.name === name)
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={band?.images}
        renderItem={() => {
          return (
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/39/c6/95/39c695052462765ae5148cb8a8ce10b1.jpg",
              }}
              style={{ width: 100, height: 100 }}
            />
          );
        }}
      />
      <Text>asd</Text>
      <Button
        title="Donate"
        onPress={() => {
          console.log("assd");
        }}
      />
      <Button
        title="Donate"
        onPress={() => {
          console.log("assd");
        }}
      />
    </View>
  );
}
