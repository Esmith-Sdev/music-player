import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import GradientBackground from "../Components/GradientBackground";
import SecondaryNav from "../Components/SecondaryNav";
import SongList from "../Components/SongList";
import MiniPlayer from "../Components/MiniPlayer";
import { COLORS } from "../Constants/theme";
import Feather from "@expo/vector-icons/Feather";
export default function Index() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
        <View style={styles.screen}>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <Feather
                name="settings"
                size={30}
                color="red"
                style={{ paddingRight: 15 }}
              />
            </TouchableOpacity>
          </View>
          <GradientBackground>
            <View style={styles.content}>
              <SongList />
            </View>
            <View style={styles.stickyBottom}>
              <MiniPlayer />
            </View>
            <SecondaryNav />
          </GradientBackground>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  stickyBottom: {
    position: "sticky",
    bottom: 15,
  },
  screenBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
  },
  screen: {
    display: "flex",
    backgroundColor: "#121212",
    position: "relative",
    overflow: "hidden",
    flex: 1,
  },
  content: {
    flex: 1,
    zIndex: 1,
    marginTop: 80,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  songContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,

    borderRadius: 15,
  },
  songTitle: {
    color: "#fff",
    fontSize: 15,
  },
});
