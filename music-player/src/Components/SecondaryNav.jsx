import { View, StyleSheet, Text, Pressable } from "react-native";
import { COLORS } from "../Constants/theme";
export default function SecondaryNav() {
  return (
    <View style={styles.secondaryNav}>
      <View style={styles.container}>
        <Pressable style={styles.navPress} hitSlop={5}>
          {({ pressed }) => (
            <Text style={[styles.title, { color: pressed ? "red" : "white" }]}>
              Songs
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.navPress} hitSlop={5}>
          {({ pressed }) => (
            <Text style={[styles.title, { color: pressed ? "red" : "white" }]}>
              Playlists
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.navPress} hitSlop={5}>
          {({ pressed }) => (
            <Text style={[styles.title, { color: pressed ? "red" : "white" }]}>
              Artists
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  secondaryNav: {
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,.5)",
    top: 0,
    left: 0,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    borderBottomWidth: 2,
    borderColor: COLORS.primary,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  navPress: {
    border: "none",
  },
});
