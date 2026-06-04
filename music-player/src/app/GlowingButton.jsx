import { Text, Pressable, StyleSheet } from "react-native";
import AnimatedGlow from "react-native-animated-glow";

const neonGreenPreset = {
  cornerRadius: 50,
  outlineWidth: 4,
  borderColor: [
    "rgb(178, 85, 255)",
    "rgba(245, 17, 89, 1)",
    "rgb(178, 85, 255)",
  ],
  backgroundColor: "#222",
  animationSpeed: 2,
  borderSpeedMultiplier: 1,
  glowLayers: [
    {
      glowPlacement: "behind",
      colors: ["#f51159", "#ae00ff", "#f51159"],
      glowSize: [10, 20, 10],
      opacity: 0.2,
      speedMultiplier: 1,
      coverage: 1,
    },
    {
      glowPlacement: "behind",
      colors: ["#f51159", "#ae00ff", "#f51159"],
      glowSize: [1, 8, 1],
      opacity: 0.3,
      speedMultiplier: 1,
      coverage: 1,
    },
    {
      glowPlacement: "behind",
      colors: ["#f51159", "#ae00ff", "#f51159"],
      glowSize: [1, 8, 1],
      opacity: 0.3,
      speedMultiplier: 1,
      coverage: 0.75,
    },
    {
      glowPlacement: "behind",
      colors: ["#f51159", "#ae00ff", "#f51159"],
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
    borderRadius: 50,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
