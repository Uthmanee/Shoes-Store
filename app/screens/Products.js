import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import ErrorIndicator from "../components/ErrorIndicator";
import AppActivityIndicator from "../components/AppActivityIndicator";
import products from "../api/products";
import ProductItem from "../components/ProductItem";
import Screen from "../components/Screen";
import useApi from "../api/useApi";
import OfflineNotice from "../components/OfflineNotice";

function Products() {
  const netInfo = useNetInfo();

  const {
    data,
    error,
    loading,
    request: loadProducts,
  } = useApi(products.getProducts);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Screen style={styles.screen}>
      <AppActivityIndicator loading={loading} />
      <ErrorIndicator
        error={error && netInfo.isInternetReachable === true}
        load={loadProducts}
      />
      <OfflineNotice />
      <Text style={styles.products}>Products</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  products: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 20,
  },
  screen: {},
});

export default Products;
