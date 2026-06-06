import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import GlowingButton from "./GlowingButton";
import RegularButton from "../Components/RegularButton";

import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
export default function SongList() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [active, setActive] = useState("1");
  // const audioFiles = [
  //   { id: "1", title: "Song 1", artist: "Artist Name", duration: "2:50" },
  //   { id: "2", title: "Song 2", artist: "Artist Name", duration: "2:50" },
  //   { id: "3", title: "Song 3", artist: "Artist Name", duration: "2:50" },
  //   { id: "4", title: "Song 4", artist: "Artist Name", duration: "2:50" },
  // ];
  async function getDeviceAudio() {
    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status !== "granted") return [];

    const result = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: 1000,
    });
    const songs = result.assets.map((asset) => ({
      id: asset.id,
      title: asset.filename.replace(/\.[^/.]+$/, ""),
      artist: "Unknown Artist",
      uri: asset.uri,
      duration: asset.duration,
    }));
    return songs;
  }
  useEffect(() => {
    getDeviceAudio().then((files) => setAudioFiles(files));
  }, []);
  return (
    <View style={styles.column}>
      <FlatList
        data={audioFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.songContainer}>
            {item.id === active ? (
              <GlowingButton
                title={item.title}
                duration={item.duration}
                artist={item.artist}
              />
            ) : (
              <RegularButton
                title={item.title}
                duration={item.duration}
                artist={item.artist}
              />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  regularButton: {
    backgroundColor: "#222",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 5,
  },
});
