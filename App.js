import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.phoneContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneContainer: {
    flex: 1,
    backgroundColor: "black", // Smartphone frame color
    justifyContent: "flex-end",
    paddingTop: 5,
    paddingLeft: 600,
    paddingRight: 600,
    paddingBottom: 5,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff", // Screen background color
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF", // Button color
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff", // Button text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
