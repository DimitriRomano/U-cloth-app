import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import {
  TopNav,
  MenuModal,
  Heart,
  Bag,
  Rating,
  Heading,
  Twitter,
  Filter,
  Google,
} from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../../constants";

const SLIDE = [
  {
    id: "1",
    image: require("../../images/banner/fond.jpg"),
  },
];

const CATEGORIES = [
  {
    id: "1",
    text: "Tout",
  },
  {
    id: "2",
    text: "Pull",
  },
  {
    id: "3",
    text: "Cardigans",
  },
  {
    id: "4",
    text: "Pantalon",
  },
  {
    id: "5",
    text: "Chemises",
  },
];
const CLOTHING_CATEGORIES2 = [
  {
    id: "3",
    name: "Purple sneakers",
    price: "29.95",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/03.png"),
  },
  {
    id: "4",
    name: "Warm hat",
    price: "29.95",
    oldPrice: "38.00",
    discount: "50% off",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/03.png"),
  },
  {
    id: "5",
    name: "Denim shorts",
    price: "29.95",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/03.png"),
  },
];
const CLOTHING_CATEGORIES = [
  {
    id: "1",
    name: "Robe femme",
    price: "29.95",
    oldPrice: "38.00",
    description: "pull",
    discount: "50% off",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/categories/robe.jpg"),
  },
  {
    id: "2",
    name: "Summer dress",
    price: "29.95",
    oldPrice: "38.00",
    description: "robe pour femme",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: true,
    image: require("../../images/products/pull.jpg"),
  },
];

export default function Search() {
  const [category, setCategory] = useState(0);

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TopNav back={true} />
        <Text style={{ marginLeft: 120, ...FONTS.H2, marginTop: 10 }}>
          Marque
        </Text>
        <Image
          source={require("../../images/logos/utilisateur.png")}
          style={{ width: 40, height: 40, marginLeft: 60, marginTop: 0 }}
        ></Image>
      </View>
    );
  }

  function renderContent() {
    return (
      <ScrollView>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <FlatList
            data={CATEGORIES}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      category == index ? COLORS.lightBlue : COLORS.transparent,
                    borderRadius: 50,
                    marginRight: 14,
                  }}
                  onPress={() => setCategory(index)}
                >
                  <Text
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 5,
                      ...FONTS.Mulish_600SemiBold,
                      fontSize: 12,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: COLORS.black,
                    }}
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
              );
            }}
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
                  >
                    <TouchableOpacity
                      style={{
                        padding: 10,
                      }}
                    >
                      <Heart
                        strokeColor={item.like ? COLORS.carrot : COLORS.gray}
                        fillColor={
                          item.like ? COLORS.carrot : COLORS.transparent
                        }
                      />
                    </TouchableOpacity>
                 
                  </View>
                  {item.sale && (
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        backgroundColor: "#69864D",
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
                        sale
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
                    <Text
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
                    </Text>
                    <Text
                      style={{
                        ...FONTS.Mulish_600SemiBold,
                        fontSize: 14,
                        lineHeight: 14 * 1.5,
                        color: COLORS.carrot,
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

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 20,
          }}
        >
          <FlatList
            data={CLOTHING_CATEGORIES}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View
                style={{
                  width: 145,
                  marginRight: 14,
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
                  >
                    <TouchableOpacity
                      style={{
                        padding: 10,
                      }}
                    >
                      <Heart
                        strokeColor={item.like ? COLORS.carrot : COLORS.gray}
                        fillColor={
                          item.like ? COLORS.carrot : COLORS.transparent
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  {item.sale && (
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        backgroundColor: "#69864D",
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
                        sale
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: "Mulish_400Regular",
                    fontSize: 14,
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
                    <Text
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
                    </Text>
                    <Text
                      style={{
                        ...FONTS.Mulish_600SemiBold,
                        fontSize: 14,
                        lineHeight: 14 * 1.5,
                        color: COLORS.carrot,
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
