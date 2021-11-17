import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dummybottombar from "./components/Dummybottombar";
import Homescreen from "./screens/Homescreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Homescreen />
      <Dummybottombar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
