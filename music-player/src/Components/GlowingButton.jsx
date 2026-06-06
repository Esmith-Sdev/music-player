import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import AnimatedGlow from "react-native-animated-glow";
import { COLORS } from "../Constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const neonGreenPreset = {
  cornerRadius: 5,
  outlineWidth: 4,
  borderColor: ["rgb(255, 82, 82)", "rgb(245, 17, 17)", "rgb(255, 82, 82)"],
  backgroundColor: "#222",
  animationSpeed: 2,
  borderSpeedMultiplier: 1,
  glowLayers: [
    {
      glowPlacement: "behind",
      colors: ["#ff5252", "#ff0000", "rgb(255, 82, 82)"],
      glowSize: [10, 20, 10],
      opacity: 0.2,
      speedMultiplier: 1,
      coverage: 1,
    },
    {
      glowPlacement: "behind",
      colors: ["#ff5252", "#ff0000", "#ff5252"],
      glowSize: [1, 8, 1],
      opacity: 0.3,
      speedMultiplier: 1,
      coverage: 1,
    },
    {
      glowPlacement: "behind",
      colors: ["#ff5252", "#ff0000", "#ff5252"],
      glowSize: [1, 8, 1],
      opacity: 0.3,
      speedMultiplier: 1,
      coverage: 0.75,
    },
    {
      glowPlacement: "behind",
      colors: ["#ff5252", "#ff0000", "#ff5252"],
      glowSize: [2, 8, 2],
      opacity: 0.5,
      speedMultiplier: 1,
      coverage: 1,
    },
  ],
};

export default function GlowingButton({ title, artist, duration }) {
  return (
    <AnimatedGlow preset={neonGreenPreset}>
      <Pressable style={styles.button}>
        <View style={[styles.row, { alignItems: "center" }]}>
          <View style={styles.column}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.subText}>{artist}</Text>
          </View>

          <View
            style={[
              styles.row,
              styles.center,
              { position: "absolute", right: -15 },
            ]}
          >
            <Text style={styles.subText}>{duration}</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </AnimatedGlow>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#222",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 5,
  },
  column: {
    flexDirection: "column",
    display: "flex",
  },

  row: {
    flexDirection: "row",
    display: "flex",
  },
  flex: {
    flex: 1,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  subText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "400",
  },
});
