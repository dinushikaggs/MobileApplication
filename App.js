import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.item}>
        <Task text={"Task 01"} />
        <Task text={"Task 02"} />
      </View>
      {/* Additional components or content can be added here */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  taskWrapper: {
    flex: 1,
    backgroundColor: "lightgray", // Set the background color of the entire page
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    // Remove the backgroundColor property from here
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
});
