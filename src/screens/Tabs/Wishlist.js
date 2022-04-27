import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TopNav } from "../../components";

import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

export default function Wishlist() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <TopNav
        text="Wishlist"
        back={true}
        bag={false}
        backOnPress={() => navigation.goBack()}
      />
    );
  }

  function renderContent() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flexDirection: "column" }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 100,
                  marginTop: 10,
                  marginLeft: 50,
                  marginTop: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../../images/products/pull.jpg")}
                    style={{ width: 120, height: 100 }}
                  ></Image>
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ ...FONTS.H2, fontWeight: "bold" }}>Titre</Text>
                  <View style={{ marginTop: 8 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.bleu,
                        fontWeight: "bold",
                      }}
                    >
                      $30
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 85,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.bleu,
                      alignSelf: "center",
                      marginBottom: 30,
                      marginTop: 8,
                    }}
                    onPress={() => navigation.navigate("MainLayout")}
                  >
                    <Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: COLORS.white,
                        fontWeight: "bold",
                      }}
                    >
                      stock
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 100,
                  marginLeft: 50,
                  marginTop: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../../images/products/pull2.jpg")}
                    style={{ width: 120, height: 100 }}
                  ></Image>
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ ...FONTS.H2, fontWeight: "bold" }}>Titre</Text>
                  <View style={{ marginTop: 8 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.bleu,
                        fontWeight: "bold",
                      }}
                    >
                      $ 55
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 85,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.golden,
                      alignSelf: "center",

                      marginTop: 8,
                    }}
                    onPress={() => navigation.navigate("MainLayout")}
                  >
                    <Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: COLORS.white,
                        fontWeight: "bold",
                      }}
                    >
                      Pas de stock
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 100,
                  marginLeft: 50,
                  marginTop: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../../images/products/pull.jpg")}
                    style={{ width: 120, height: 100 }}
                  ></Image>
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ ...FONTS.H2, fontWeight: "bold" }}>Titre</Text>
                  <View style={{ marginTop: 8 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.bleu,
                        fontWeight: "bold",
                      }}
                    >
                      $ 46
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 85,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.golden,
                      alignSelf: "center",

                      marginTop: 8,
                    }}
                    onPress={() => navigation.navigate("MainLayout")}
                  >
                    <Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: COLORS.white,
                        fontWeight: "bold",
                      }}
                    >
                      Pas de stock
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 100,
                  marginLeft: 50,
                  marginTop: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../../images/products/pull2.jpg")}
                    style={{ width: 120, height: 100 }}
                  ></Image>
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ ...FONTS.H2, fontWeight: "bold" }}>Titre</Text>
                  <View style={{ marginTop: 8 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.bleu,
                        fontWeight: "bold",
                      }}
                    >
                      $ 81
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 85,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.bleu,
                      alignSelf: "center",

                      marginTop: 8,
                    }}
                    onPress={() => navigation.navigate("MainLayout")}
                  >
                    <Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: COLORS.white,
                        fontWeight: "bold",
                      }}
                    >
                      stock
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginRight: 50 }}>
            <Text style={{ ...FONTS.H3, marginTop: 15, marginLeft: 40 }}>
              Recommadation
            </Text>
            <View
              style={{ flexDirection: "row", marginTop: 15, marginLeft: 40 }}
            >
              <View style={{ flexDirection: "column" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 130, height: 200 }}
                ></Image>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ ...FONTS.H3 }}>Pull</Text>
                  <Text style={{ marginTop: 5 }}>pull pour homme</Text>
                  <Text style={{ color: COLORS.bleu, marginTop: 5 }}>$ 60</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", marginLeft: 20 }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 130, height: 200 }}
                ></Image>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ ...FONTS.H3 }}>Pull</Text>
                  <Text style={{ marginTop: 5 }}>pull pour homme</Text>
                  <Text style={{ color: COLORS.bleu, marginTop: 5 }}>$ 60</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
}
