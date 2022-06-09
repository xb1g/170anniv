import { View, Text, FlatList } from "react-native";
import React from "react";

export interface TimelineNode {
  time: Date;
  title: string;
}

export function TimeSlot({ timeline }: { timeline: Array<TimelineNode> }) {
  return (
    <View>
      <FlatList
        data={timeline}
        renderItem={({ item, index }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}
