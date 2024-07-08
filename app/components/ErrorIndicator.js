import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ErrorIndicator({ error, load }) {
  if (!error) return null;
  return (
    <Modal visible={error}>
      <View style={styles.container}>
        <Text style={styles.text}>
          An error occured while fetching data from the server.
        </Text>
        <TouchableOpacity onPress={() => load()} style={styles.button}>
          <Text style={styles.text}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#000",
    marginTop: 10,
    paddingVertical: 10,
    width: "100%",
  },
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.5)",
    justifyContent: "center",
    padding: 10,
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ErrorIndicator;
