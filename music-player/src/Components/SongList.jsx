import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import GlowingButton from "./GlowingButton";
import RegularButton from "../Components/RegularButton";

import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
export default function SongList({
  onRequestDelete,
  setActiveSong,
  player,
  setSongs,
}) {
  const [audioFiles, setAudioFiles] = useState([]);
  const [active, setActive] = useState("");
  // const audioFiles = [
  //   { id: "1", title: "Song 1", artist: "Artist Name", duration: "2:50" },
  //   { id: "2", title: "Song 2", artist: "Artist Name", duration: "2:50" },
  //   { id: "3", title: "Song 3", artist: "Artist Name", duration: "2:50" },
  //   { id: "4", title: "Song 4", artist: "Artist Name", duration: "2:50" },
  // ];
  const formatDuration = (seconds) => {
    if (!seconds) return "0:00";

    const totalSeconds = Math.floor(seconds);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${minutes}:${formattedSeconds}`;
  };
  async function getDeviceAudio() {
    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status !== "granted") return [];

    const result = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: 100,
      sortBy: [[MediaLibrary.SortBy.modificationTime, false]],
    });
    formatDuration();
    const songs = result.assets
      .map((asset) => {
        console.log(asset.filename, {
          creationTime: asset.creationTime,
          modificationTime: asset.modificationTime,
        });

        return {
          id: asset.id,
          title: asset.filename.replace(/\.[^/.]+$/, ""),
          artist: "Unknown Artist",
          uri: asset.uri,
          duration: formatDuration(asset.duration),
          creationTime: asset.creationTime,
          modificationTime: asset.modificationTime,
        };
      })
      .sort((a, b) => {
        const dateA = a.modificationTime || a.creationTime || 0;
        const dateB = b.modificationTime || b.creationTime || 0;

        return dateB - dateA;
      });

    return songs;
  }
  async function deleteSong(id) {
    try {
      await MediaLibrary.deleteAssetsAsync([id]);
      setAudioFiles((prev) => prev.filter((song) => song.id !== id));
      if (active === id) {
        setActive(null);
      }
    } catch (err) {
      console.log("Delete failed:", err);
    }
  }
  useEffect(() => {
    getDeviceAudio().then((files) => {
      setAudioFiles(files);
      setSongs(files);
    });
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
                onPress={() => {
                  setActive(item.id);
                  setActiveSong(item);
                  setTimeout(() => {
                    player.play();
                  }, 100);
                }}
                onDelete={() =>
                  onRequestDelete({
                    title: item.title,
                    onConfirm: () => deleteSong(item.id),
                  })
                }
              />
            ) : (
              <RegularButton
                title={item.title}
                duration={item.duration}
                artist={item.artist}
                onPress={() => {
                  setActive(item.id);
                  setActiveSong(item);
                  setTimeout(() => {
                    player.play();
                  }, 100);
                }}
                onDelete={() =>
                  onRequestDelete({
                    title: item.title,
                    onConfirm: () => deleteSong(item.id),
                  })
                }
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
    zIndex: 0,
    paddingBottom: 0,
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
