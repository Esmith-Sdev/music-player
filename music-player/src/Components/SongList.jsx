import { StyleSheet, FlatList, View } from "react-native";
import GlowingButton from "./GlowingButton";

export default function SongList() {
  const audioFiles = [
    { id: "1", title: "Song 1" },
    { id: "2", title: "Song 2" },
    { id: "3", title: "Song 3" },
    { id: "4", title: "Song 4" },
  ];
  return (
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
});
