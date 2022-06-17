import React from "react";
import { Button, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RootTabScreenProps } from "../../../../types";
import { Text, View } from "../../../components/Themed";

export default function BandScreen({
  navigation,
  route,
}: RootTabScreenProps<"BandDetail">) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={images}
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
