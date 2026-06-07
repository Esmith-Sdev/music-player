import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { COLORS } from "../Constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import SettingsDropdown from "../Components/SettingsDropdown";
export default function RegularButton({
  title,
  artist,
  duration,
  onPress,
  onDelete,
}) {
  const [openSettingsDropdown, setOpenSettingsDropdown] = useState(false);
  return (
    <>
      <Pressable style={styles.button} onPress={onPress}>
        <View style={[styles.row, { alignItems: "center" }]}>
          <View style={styles.column}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
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
            <TouchableOpacity
              onPress={() => setOpenSettingsDropdown((prev) => !prev)}
            >
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <SettingsDropdown
              visible={openSettingsDropdown}
              onDelete={onDelete}
            />
          </View>
        </View>
      </Pressable>
    </>
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
    fontSize: 16,
    fontWeight: "700",
    paddingRight: 45,
  },
  subText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "400",
  },
});
