import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { data } from "../data";

const Mainsection = () => {
  return (
    <View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <View>
                  <Image
                    source={{ uri: `${item.videoimg}` }}
                    style={{ height: 200, marginTop: 10 }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 14,
                    marginBottom: 30,
                    marginLeft: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Image
                      source={{ uri: `${item.creatorImg}` }}
                      style={{ height: 50, width: 50, borderRadius: 50 }}
                    />
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: 17,
                      }}
                    >
                      {item.title}
                    </Text>

                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: "lightgray",
                          fontWeight: "800",
                          fontSize: 13,
                        }}
                      >
                        {item.creator}
                      </Text>
                      <Text
                        style={{
                          color: "lightgray",
                          fontWeight: "800",
                          fontSize: 13,
                          marginLeft: 10,
                        }}
                      >
                        {item.views + " views ·"}
                      </Text>
                      <Text
                        style={{
                          color: "lightgray",
                          fontWeight: "800",
                          fontSize: 13,
                          marginLeft: 9,
                        }}
                      >
                        {item.uploaded}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Mainsection;

const styles = StyleSheet.create({});
