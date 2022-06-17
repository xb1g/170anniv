/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../../../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: "/",
          Timeline: "timeline",
          Chapel: "chapel",
          Gallery: "gallery",
          GameZone: "gamezone",
          Map: "map",
          PlaceDetail: "place-detail",
          BandDetail: "band-detail",
          MainStage: "mainstage",
          SmallStage: "smallstage",
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
