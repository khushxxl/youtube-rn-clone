import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";
import Mainsection from "./Mainsection";

const Homescreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#202020", flex: 1 }}>
      <StatusBar style="light" />
      <Navbar />
      <Mainsection />
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
