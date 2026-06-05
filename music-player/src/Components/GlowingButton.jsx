import { Text, Pressable, StyleSheet } from "react-native";
import AnimatedGlow from "react-native-animated-glow";

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

export default function GlowingButton({ title }) {
  return (
    <AnimatedGlow preset={neonGreenPreset}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{title}</Text>
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
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
