import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import ProductCard from "./ProductCard";

function ProductItem({ item }) {
  //   console.log("url", item.photos[0].url);

  return (
    <View style={styles.container}>
      <ProductCard image={item.photos[0].url} />
      <Text style={styles.brandName}>{item.name}</Text>
      <Text style={styles.detail}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brandName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  container: {
    alignItems: "center",
  },
  detail: {
    color: colors.secondaryTextColor,
    marginBottom: 15,
  },
});

export default ProductItem;
