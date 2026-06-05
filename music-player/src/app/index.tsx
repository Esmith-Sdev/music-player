import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import GradientBackground from "../Components/GradientBackground";
import SongList from "../Components/SongList";
import MiniPlayer from "../Components/MiniPlayer";
import { COLORS } from "../Constants/theme";
export default function Index() {
  // const [audioFiles, setAudioFiles] = useState([]);
  // async function getDeviceAudio() {
  //   const { status } = await MediaLibrary.requestPermissionsAsync();

  //   if (status !== "granted") return [];

  //   const result = await MediaLibrary.getAssetsAsync({
  //     mediaType: "audio",
  //     first: 1000,
  //   });
  //   const songs = result.assets.map((asset) => ({
  //     id: asset.id,
  //     title: asset.filename.replace(/\.[^/.]+$/, ""),
  //     artist: "Unknown Artist",
  //     uri: asset.uri,
  //     duration: asset.duration,
  //   }));
  //   return songs;
  // }
  // useEffect(() => {
  //   getDeviceAudio().then((files) => setAudioFiles(files));
  // }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.screen}>
          <GradientBackground>
            <View style={styles.content}>
              <SongList />
            </View>
            <View style={styles.stickyBottom}>
              <MiniPlayer />
            </View>
          </GradientBackground>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  stickyBottom: {
    position: "sticky",
    bottom: 0,
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
    padding: 50,
    zIndex: 1,
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
