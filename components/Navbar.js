import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
          }}
          style={{ height: 50, width: 50, marginLeft: 25 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 150,
          justifyContent: "space-evenly",
        }}
      >
        <Ionicons name="notifications-outline" color="white" size={25} />
        <Ionicons name="search-outline" color="white" size={25} />
        <Ionicons name="person-outline" color="white" size={25} />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
