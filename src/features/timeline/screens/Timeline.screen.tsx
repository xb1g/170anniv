import React from "react";
import { Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RootTabScreenProps } from "../../../../types";
import { Text, View } from "../../../components/styles/Themed";
import { BandData } from "../components/BandData.component";

export default function TimelineScreen({
  navigation,
}: RootTabScreenProps<"Timeline">) {
  const timelineData = [
    {
      name: "oasis",
      image:
        "https://i.pinimg.com/736x/39/c6/95/39c695052462765ae5148cb8a8ce10b1.jpg",
      time: new Date("2022-06-16T09:30:51.01"),
    },
    {
      name: "oasis",
      image:
        "https://i.pinimg.com/736x/39/c6/95/39c695052462765ae5148cb8a8ce10b1.jpg",
      time: new Date("2022-06-16T16:30:51.01"),
    },

    {
      name: "oasis",
      image:
        "https://i.pinimg.com/736x/39/c6/95/39c695052462765ae5148cb8a8ce10b1.jpg",
      time: new Date("2022-06-16T19:30:51.01"),
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={timelineData}
        renderItem={({ item, index }) => {
          return (
            <BandData
              {...item}
              navigation={navigation}
              key={item.name + index}
            />
          );
        }}
      />
      <View
        style={{
          width: 1,
          height: "100%",
          backgroundColor: "#fff",
          position: "absolute",
          left: 60,
          zIndex: -20,
        }}
      />
    </View>
  );
}
