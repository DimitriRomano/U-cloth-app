import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Rating, Heading } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../../constants";

const SLIDE = [
  {
    id: "1",
    image: require("../../images/banner/fond.jpg"),
  },
];
export default function HomeTwo() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TopNav back={true} backOnPress={() => navigation.goBack()} />
        <Text
          style={{ marginLeft: 35, ...FONTS.H5, fontSize: 18, marginTop: 12 }}
        >
          Commande avec nos partenaires
        </Text>
      </View>
    );
  }

  function renderContent() {
    return (
      <ScrollView>
        <Text style={{ ...FONTS.H5, marginLeft: 10, marginTop: 10 }}>
          Juillet 2021
        </Text>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 10,
            height: 120,
            width: 300,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.76,
            shadowRadius: 11.14,
            elevation: 17,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Text style={{ ...FONTS.H4, fontSize: 18 }}>Commande -4524</Text>
              <Text style={{ fontSize: 17, color: COLORS.bleu }}>$35</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#dbbc0d",
                  width: 90,
                  height: 35,
                }}
              >
                <Text
                  style={{
                    alignItems: "center",
                    marginLeft: 10,
                    color: COLORS.white,
                  }}
                >
                  En livraison
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ ...FONTS.H5, marginLeft: 10, marginTop: 20 }}>
          Août 2022
        </Text>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 10,
            height: 120,
            width: 300,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.76,
            shadowRadius: 11.14,
            elevation: 17,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Text style={{ ...FONTS.H4, fontSize: 18 }}>Commande -4524</Text>
              <Text style={{ fontSize: 17, color: COLORS.bleu }}>$35</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: COLORS.bleu,
                  width: 90,
                  height: 35,
                }}
              >
                <Text
                  style={{
                    alignItems: "center",
                    marginLeft: 20,
                    color: COLORS.white,
                    fontSize: 16,
                  }}
                >
                  livrer
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 20,
            height: 120,
            width: 300,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.76,
            shadowRadius: 11.14,
            elevation: 17,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Text style={{ ...FONTS.H4, fontSize: 18 }}>Commande -2225</Text>
              <Text style={{ fontSize: 17, color: COLORS.bleu }}>$35</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: COLORS.bleu,
                  width: 90,
                  height: 35,
                }}
              >
                <Text
                  style={{
                    alignItems: "center",
                    marginLeft: 20,
                    color: COLORS.white,
                    fontSize: 16,
                  }}
                >
                  livrer
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
              </View>
            </View>
          </View>
        </View>

        <Text style={{ ...FONTS.H5, marginLeft: 10, marginTop: 10 }}>
          Semptembre 2021
        </Text>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 10,
            height: 120,
            width: 300,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.76,
            shadowRadius: 11.14,
            elevation: 17,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Text style={{ ...FONTS.H4, fontSize: 18 }}>Commande -20123</Text>
              <Text style={{ fontSize: 17, color: COLORS.bleu }}>$35</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#dbbc0d",
                  width: 90,
                  height: 35,
                }}
              >
                <Text
                  style={{
                    alignItems: "center",
                    marginLeft: 10,
                    color: COLORS.white,
                  }}
                >
                  En livraison
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
                <Image
                  source={require("../../images/products/pull.jpg")}
                  style={{ width: 45, height: 45 }}
                ></Image>
              </View>
            </View>
          </View>
        </View>
        {SLIDE.map((item, index) => (
          <ImageBackground
            key={item.id}
            source={item.image}
            style={{
              width: SIZES.width,
              height: 90,
              paddingHorizontal: 0,
              paddingVertical: 25,
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.white,
                width: SIZES.width,
                height: 70,
                paddingHorizontal: 20,
                paddingVertical: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ marginLeft: 8 }}>
                  <Image
                    source={require("../../images/icons/curseur.png")}
                    style={{ width: 30, height: 30 }}
                  ></Image>
                </View>
                <View style={{ marginLeft: 80 }}>
                  <Image
                    source={require("../../images/icons/panier.png")}
                    style={{ width: 30, height: 30 }}
                  ></Image>
                </View>
                <View style={{ marginLeft: 90 }}>
                  <Image
                    source={require("../../images/icons/profil.png")}
                    style={{ width: 30, height: 30 }}
                  ></Image>
                </View>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
}
