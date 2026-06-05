import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS } from "../Constants/theme";
export default function MiniPlayer() {
  return (
    <View style={styles.playerContainer}>
      <View style={[styles.column, styles.center]}>
        <Text style={styles.songTitle}>Song</Text>
        <Text style={styles.artistText}>Artist Name</Text>

        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controllerIcon}>
            <Entypo name="controller-jump-to-start" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controllerIcon}>
            <Entypo name="controller-play" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controllerIcon}>
            <Entypo name="controller-next" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.progressBar} />
        <Text style={styles.timeText}>2:50</Text>
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
    backgroundColor: "rgba(0,0,0,.3)",
    marginBottom: 10,
    borderRadius: 15,
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
