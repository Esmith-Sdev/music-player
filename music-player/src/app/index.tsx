import { Text, View, StyleSheet, FlatList } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
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
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.column}>
          <FlatList
            data={audioFiles}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.songContainer}>
                <Text style={styles.songTitle}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    padding: 50,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  songContainer: {
    backgroundColor: "#000",
    width: "100%",
    height: 40,
    borderRadius: 15,
  },
  songTitle: {
    color: "#fff",
    fontSize: 25,
  },
});
