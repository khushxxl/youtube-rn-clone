import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Dummybottombar = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#202020",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      <Ionicons name="home-outline" color="white" size={30} style="ios" />
      <Ionicons
        name="play-circle-outline"
        color="white"
        size={30}
        style="ios"
      />
      <Ionicons name="add-circle" color="white" size={40} style="ios" />
      <Ionicons name="play-outline" color="white" size={30} style="ios" />
      <Ionicons name="videocam-outline" color="white" size={30} style="ios" />
    </SafeAreaView>
  );
};

export default Dummybottombar;

const styles = StyleSheet.create({});
