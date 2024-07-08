import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  return (
    <Modal
      visible={
        netInfo.type === "unknown" && netInfo.isInternetReachable === false
      }
    >
      <View style={styles.container}>
        <Text style={styles.text}>No internet connection.</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.5)",
    justifyContent: "center",
    padding: 10,
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
});

export default OfflineNotice;
