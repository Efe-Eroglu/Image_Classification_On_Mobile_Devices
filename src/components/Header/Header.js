import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Cat Or Dog ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6449eb",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Header;
