import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS } from "../Constants/theme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
export default function MiniPlayer({ song, player, onNext }) {
  if (!song) return null;
  const [play, setPlay] = useState(false);
  return (
    <View style={styles.playerContainer}>
      <View style={[styles.column, styles.center]}>
        <Text style={styles.songTitle}>{song.title}</Text>
        <Text style={styles.artistText}>{song.artist}</Text>

        <View style={styles.controlsContainer}>
          <TouchableOpacity
            style={styles.controllerIcon}
            onPress={() => {
              player.seekTo(0);
              player.play();
            }}
          >
            <Entypo name="controller-jump-to-start" size={24} color="white" />
          </TouchableOpacity>

          {!play ? (
            <TouchableOpacity
              style={styles.controllerIcon}
              onPress={() => {
                player.play();
                setPlay(true);
              }}
            >
              <Entypo name="controller-play" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.controllerIcon}
              onPress={() => {
                player.pause();
                setPlay(false);
              }}
            >
              <FontAwesome6 name="pause" size={24} color="black" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.controllerIcon} onPress={onNext}>
            <Entypo name="controller-next" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableHighlight style={styles.progressBar}>
          <View style={styles.progressBarFill} />
        </TouchableHighlight>

        <Text style={styles.timeText}>{song.duration}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  playerContainer: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderColor: COLORS.primary,
    borderWidth: 2,
    backgroundColor: "rgb(49, 0, 0)",
    marginBottom: 10,
    borderRadius: 15,
    zIndex: 1,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  controlsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    gap: 15,
    alignItems: "center",
  },
  controllerIcon: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 999,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  songTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
  },
  artistText: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.4,
  },
  progressBar: {
    width: "75%",
    borderRadius: 15,
    height: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  progressBarFill: {
    width: "25%",
    backgroundColor: COLORS.primary,
  },
  timeText: {
    color: "#fff",
    fontSize: 15,
    bottom: -2,
    right: 10,
    position: "absolute",
  },
});
