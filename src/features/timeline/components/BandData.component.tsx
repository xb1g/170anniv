import { Image, Pressable } from "react-native";
import { Text, View } from "../../../components/styles/Themed";

export function BandData({
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
      <Pressable
        onPress={() =>
          navigation.navigate("Band", {
            name,
          })
        }
      >
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
