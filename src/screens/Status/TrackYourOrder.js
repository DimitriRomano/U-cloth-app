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

const CLOTHING_CATEGORIES = [
  {
    id: "1",
    name: "Robe femme",
    price: "29.95",
    oldPrice: "38.00",
    description: "robe femme",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: true,
    image: require("../../images/categories/robe.jpg"),
  },
  {
    id: "2",
    name: "Summer dress",
    price: "29.95",
    oldPrice: "38.00",
    description: "pull",
    discount: "50% off",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/pull.jpg"),
  },
];
const SLIDE = [
  {
    id: "1",
    image: require("../../images/banner/fond.jpg"),
  },
];
export default function TrackYourOrder() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <TopNav back={true} backOnPress={() => navigation.goBack()} />
        <Text style={{ marginLeft: 110, ...FONTS.H2, marginTop: 12
         }}>
          Produits
        </Text>
        <Image
          source={require("../../images/logos/utilisateur.png")}
          style={{ width: 40, height: 40, marginLeft: 60, marginTop: 7 }}
        ></Image>
      </View>
    );
  }

  function renderContent() {
    return (
      <ScrollView>
        <View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                ...FONTS.H3,
                fontSize: 16,
                marginLeft: 13,
                fontWeight: "bold",
              }}
            >
              Top marque
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                height: 50,
                width: 140,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.76,
                shadowRadius: 11.14,
                elevation: 17,
              }}
            >
              <View style={{ marginLeft: 8, marginTop: 8 }}>
                <Image
                  source={require("../../images/icons/adidas.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 10,
                  marginTop: 3,
                }}
              >
                <Text style={{ ...FONTS.H4 }}>adidas</Text>
                <Text>5023 produits</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                backgroundColor: "white",
                height: 50,
                width: 140,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.76,
                shadowRadius: 11.14,
                elevation: 17,
              }}
            >
              <View style={{}}>
                <Image
                  source={require("../../images/icons/puma.png")}
                  style={{ width: 40, height: 40, borderRadius: 5 }}
                ></Image>
              </View>
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ ...FONTS.H4 }}>Puma</Text>
                <Text>300 produits</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                backgroundColor: "white",
                height: 50,
                width: 140,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.76,
                shadowRadius: 11.14,
                elevation: 17,
              }}
            >
              <View style={{}}>
                <Image
                  source={require("../../images/icons/nike.png")}
                  style={{ width: 40, height: 40, borderRadius: 5 }}
                ></Image>
              </View>
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ ...FONTS.H4 }}>Puma</Text>
                <Text>300 produits</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <FlatList
                data={CLOTHING_CATEGORIES}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: 145,
                      marginRight: 14,
                      paddingTop: 10,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        height: 250,
                        backgroundColor: COLORS.lightBlue,
                        marginBottom: 6,
                      }}
                      onPress={() => navigation.navigate("Product")}
                    >
                      <Image
                        source={item.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          resizeMode: "cover",
                        }}
                      />

                      <View
                        style={{
                          position: "absolute",
                          right: 0,
                          top: 0,
                        }}
                      ></View>
                      {item.sale && (
                        <View
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 92,
                            backgroundColor: "#bd1324",
                          }}
                        >
                          <Text
                            style={{
                              paddingHorizontal: 6,
                              paddingVertical: 1,
                              textTransform: "uppercase",
                              ...FONTS.Mulish_700Bold,
                              fontSize: 8,
                              color: COLORS.white,
                              lineHeight: 8 * 1.7,
                            }}
                          >
                            Nouveau
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>

                    <Text
                      style={{
                        fontFamily: "Mulish_400Regular",
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: "bold",
                        lineHeight: 14 * 1.7,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Mulish_400Regular",
                        fontSize: 14,
                        color: COLORS.black,

                        lineHeight: 14 * 1.7,
                      }}
                    >
                      {item.description}
                    </Text>
                    {item.oldPrice ? (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        {/* <Text
                        style={{
                          color: COLORS.black,
                          marginRight: 4,
                          color: COLORS.gray,
                          ...FONTS.Mulish_400Regular,
                          fontSize: 12,
                          lineHeight: 12 * 1.5,
                          textDecorationLine: "line-through",
                        }}
                      >
                        ${item.oldPrice}
                      </Text> */}
                        <Text
                          style={{
                            ...FONTS.Mulish_600SemiBold,
                            fontSize: 14,
                            lineHeight: 14 * 1.5,
                            color: COLORS.bleu,
                          }}
                        >
                          ${item.price}
                        </Text>
                      </View>
                    ) : (
                      <Text
                        style={{
                          ...FONTS.Mulish_600SemiBold,
                          fontSize: 14,
                          lineHeight: 14 * 1.5,
                          color: COLORS.black,
                        }}
                      >
                        ${item.price}
                      </Text>
                    )}
                  </View>
                )}
                contentContainerStyle={{ paddingLeft: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <FlatList
                data={CLOTHING_CATEGORIES}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: 145,
                      marginRight: 14,
                      paddingTop: 10,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        height: 250,
                        backgroundColor: COLORS.lightBlue,
                        marginBottom: 6,
                      }}
                      onPress={() => navigation.navigate("Product")}
                    >
                      <Image
                        source={item.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          resizeMode: "cover",
                        }}
                      />

                      <View
                        style={{
                          position: "absolute",
                          right: 0,
                          top: 0,
                        }}
                      ></View>
                      {item.sale && (
                        <View
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 92,
                            backgroundColor: "#bd1324",
                          }}
                        >
                          <Text
                            style={{
                              paddingHorizontal: 6,
                              paddingVertical: 1,
                              textTransform: "uppercase",
                              ...FONTS.Mulish_700Bold,
                              fontSize: 8,
                              color: COLORS.white,
                              lineHeight: 8 * 1.7,
                            }}
                          >
                            Nouveau
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>

                    <Text
                      style={{
                        fontFamily: "Mulish_400Regular",
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: "bold",
                        lineHeight: 14 * 1.7,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Mulish_400Regular",
                        fontSize: 14,
                        color: COLORS.black,

                        lineHeight: 14 * 1.7,
                      }}
                    >
                      {item.description}
                    </Text>
                    {item.oldPrice ? (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        {/* <Text
                        style={{
                          color: COLORS.black,
                          marginRight: 4,
                          color: COLORS.gray,
                          ...FONTS.Mulish_400Regular,
                          fontSize: 12,
                          lineHeight: 12 * 1.5,
                          textDecorationLine: "line-through",
                        }}
                      >
                        ${item.oldPrice}
                      </Text> */}
                        <Text
                          style={{
                            ...FONTS.Mulish_600SemiBold,
                            fontSize: 14,
                            lineHeight: 14 * 1.5,
                            color: COLORS.bleu,
                          }}
                        >
                          ${item.price}
                        </Text>
                      </View>
                    ) : (
                      <Text
                        style={{
                          ...FONTS.Mulish_600SemiBold,
                          fontSize: 14,
                          lineHeight: 14 * 1.5,
                          color: COLORS.black,
                        }}
                      >
                        ${item.price}
                      </Text>
                    )}
                  </View>
                )}
                contentContainerStyle={{ paddingLeft: 20 }}
              />
            </View>
          </View>
        </View>
        {SLIDE.map((item, index) => (
          <ImageBackground
            key={item.id}
            source={item.image}
            style={{
              width: SIZES.width,
              height: 100,
              paddingHorizontal: 0,
              paddingVertical: 25,
              marginTop: 30,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.white,
                width: SIZES.width,
                height: 100,
                paddingHorizontal: 20,
                paddingVertical: 25,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Mulish_400Regular",
                      fontSize: 16,
                      lineHeight: 16 * 1.7,
                      fontWeight: "bold",
                      color: COLORS.black,
                    }}
                  >
                    Pas filter appliqué
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 140,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.bleu,
                    alignSelf: "center",
                    marginLeft: 20,
                  }}
                >
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontSize: 14,
                      fontWeight: "bold",
                      color: COLORS.white,
                    }}
                  >
                    Filter
                  </Text>
                </TouchableOpacity>
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
