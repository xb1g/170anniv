import React from "react";
import { Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RootTabScreenProps } from "../../../../types";
import { Text, View } from "../../../components/Themed";

function BandData({
  image,
  name,
  time,
  navigation,
}: {
  image: string;
  name: string;
  time: Date;
  navigation: any;
}) {
  console.log(new Date().getTime() > time.getTime());
  console.log(typeof time);
  console.log(Object.keys(time));

  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 20 }}>
      <View
        darkColor={new Date().getTime() > time.getTime() ? "red" : "#444"}
        style={{
          padding: 5,
          borderRadius: 10,
          height: 30,
        }}
      >
        <Text>{time.toLocaleTimeString()}</Text>
      </View>
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <View
          darkColor="#333"
          style={{
            padding: 10,
            borderRadius: 10,
            marginLeft: 30,
          }}
        >
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
            <Text>{name}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
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
