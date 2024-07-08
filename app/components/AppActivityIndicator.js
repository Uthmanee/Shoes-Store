import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";

function AppActivityIndicator({ loading }) {
  if (!loading) return null;
  return (
    <Modal visible={loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.5)",
    justifyContent: "center",
    flex: 1,
  },
});

export default AppActivityIndicator;
