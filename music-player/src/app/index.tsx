import { Text, View, StyleSheet, FlatList } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import GradientBackground from "./GradientBackground";
import GlowingButton from "./GlowingButton";
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
  const audioFiles = [
    { id: "1", title: "Song 1" },
    { id: "2", title: "Song 2" },
    { id: "3", title: "Song 3" },
    { id: "4", title: "Song 4" },
  ];
  return (
    <>
      <View style={styles.screen}>
        <GradientBackground>
          <View style={styles.content}>
            <View style={styles.column}>
              <FlatList
                data={audioFiles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.songContainer}>
                    <GlowingButton title={item.title} />
                  </View>
                )}
              />
            </View>
          </View>
        </GradientBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
