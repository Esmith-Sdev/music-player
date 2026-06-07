import { COLORS } from "@/Constants/theme";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
export default function SettingsDropdown({ onDelete, visible }) {
  if (!visible) return null;
  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.optionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  dropdownContainer: {
    display: "flex",
    flexDirection: "column",
  },
  optionText: {
    fontSize: 15,
    color: COLORS.primary,
  },
});
