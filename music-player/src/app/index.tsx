import { Text, View, StyleSheet } from "react-native";
import * as MediaLibrary from "expo-media-library";
import GlassContainer from "./GlassContainer";
export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.column}>
          <GlassContainer
            baseRounded="rounded-[2rem]"
            contentClassName="p-4 gap-3 sm:gap-5 flex-wrap justify-center"
            glassOpacity={0.25}
            isDarkMode={true}
          >
            <View style={styles.songContainer}>
              <Text style={styles.songTitle}>Text</Text>
            </View>
          </GlassContainer>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    padding: 50,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  songContainer: {
    backgroundColor: "#000",
    width: "100%",
    height: 40,
    borderRadius: 15,
  },
  songTitle: {
    color: "#fff",
    fontSize: 25,
  },
});
