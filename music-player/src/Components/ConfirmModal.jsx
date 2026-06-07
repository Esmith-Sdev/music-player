import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS } from "../Constants/theme";
export default function ConfirmModal({ visible, onCancel, onConfirm, title }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.box}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.blueButton} onPress={onConfirm}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.orangeButton} onPress={onCancel}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  box: {
    width: 250,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dedede",
  },
  title: {
    fontSize: 18,
    fontFamily: "Jua",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 25,
  },

  orangeButton: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,

    zIndex: 10,
  },
  blueButton: {
    backgroundColor: "green",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Jua",
    fontSize: 15,
    textAlign: "center",
  },
});
