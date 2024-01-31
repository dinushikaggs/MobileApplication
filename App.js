import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.item}></View>
      {/* Additional components or content can be added here */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  taskWrapper: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    // Add styles for your task item as needed
    backgroundColor: "lightgray",
    height: 50,
    marginTop: 20,
  },
});
