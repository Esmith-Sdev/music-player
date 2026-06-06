import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { COLORS } from "../Constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RegularButton({ title, artist, duration }) {
  return (
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
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#222",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.primary,
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
    fontSize: 18,
    fontWeight: "700",
  },
  subText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "400",
  },
});
