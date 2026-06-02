import { View, StyleSheet, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

const { width, height } = Dimensions.get("window");

function Blob({ size, color, startX, startY, moveX, moveY, duration }) {
  const x = useSharedValue(startX);
  const y = useSharedValue(startY);
  const scale = useSharedValue(1);

  useEffect(() => {
    x.value = withRepeat(
      withSequence(
        withTiming(moveX, { duration, easing: Easing.inOut(Easing.ease) }),
        withTiming(startX, { duration, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      true,
    );

    y.value = withRepeat(
      withSequence(
        withTiming(moveY, { duration, easing: Easing.inOut(Easing.ease) }),
        withTiming(startY, { duration, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      true,
    );

    scale.value = withRepeat(
      withSequence(
        withTiming(1.3, { duration: duration / 2 }),
        withTiming(0.9, { duration: duration / 2 }),
      ),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: x.value },
      { translateY: y.value },
      { scale: scale.value },
    ],
  }));

  return (
    <Animated.View
      style={[
        styles.blob,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    />
  );
}

export default function LavaBackground() {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <View style={styles.background}>
        <Blob
          size={260}
          color="#7127ff"
          startX={-80}
          startY={100}
          moveX={width - 120}
          moveY={height * 0.3}
          duration={9000}
        />

        <Blob
          size={220}
          color="#f51159"
          startX={width - 120}
          startY={height * 0.55}
          moveX={20}
          moveY={height * 0.15}
          duration={11000}
        />

        <Blob
          size={300}
          color="#281066"
          startX={width * 0.2}
          startY={height * 0.75}
          moveX={width * 0.6}
          moveY={50}
          duration={13000}
        />

        <BlurView intensity={90} style={StyleSheet.absoluteFillObject} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#121212",
    overflow: "hidden",
  },
  blob: {
    position: "absolute",
    opacity: 0.8,
  },
});
