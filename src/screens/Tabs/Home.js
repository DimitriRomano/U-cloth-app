import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

import {
  Bag,
  TopNav,
  Heart,
  Rating,
  Heading,
  Filter,
  SortingElement,
} from "../../components";
import { COLORS, SIZES, FONTS } from "../../constants";

const SLIDE = [
  {
    id: "1",
    description: "Welcome To ucloth!",
    discount: "50% off",
    image: require("../../images/slide/01.png"),
  },
  {
    id: "2",
    description: "Welcome To Manero!",
    discount: "50% off",
    image: require("../../images/slide/02.png"),
  },
  {
    id: "3",
    description: "Welcome To Manero!",
    discount: "50% off",
    image: require("../../images/slide/03.png"),
  },
];
const PRODUCTS = [
  {
    id: "1",
    name: "m4",
    price: "22.87",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/08.png"),
  },
  {
    id: "2",
    name: "m2",

    image: require("../../images/products/08.png"),
  },
  {
    id: "3",
    name: "m1",

    image: require("../../images/products/08.png"),
  },
];
const BEST_SELLERS = [
  {
    id: "1",
    name: "Black sneakers",
    price: "29.95",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/01.png"),
  },
  {
    id: "2",
    name: "Summer dress",
    price: "29.95",
    oldPrice: "38.00",
    discount: "50% off",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/02.png"),
  },
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

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Summer dress",
    price: "42.89",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/04.png"),
  },
  {
    id: "2",
    name: "Shoulder bag",
    price: "30.00",
    oldPrice: "38.00",
    discount: "50% off",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/05.png"),
  },
  {
    id: "3",
    name: "Denim shorts",
    price: "54.96",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/06.png"),
  },
  {
    id: "4",
    name: "T-shirt",
    price: "12.95",
    oldPrice: "15.00",
    discount: "50% off",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/04.png"),
  },
  {
    id: "5",
    name: "Hand bag",
    price: "24.95",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/04.png"),
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
    sale: false,
    like: false,
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

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const navigation = useNavigation();

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../images/logos/mahami.png")}
          style={{ width: 200, height: 100, marginLeft: 10 }}
        ></Image>
        <Image
          source={require("../../images/logos/utilisateur.png")}
          style={{ width: 50, height: 50, marginTop: 23, marginLeft: 40 }}
        ></Image>
      </View>
    );
  }

  function renderBestSellers() {
    return (
      <View style={{ marginTop: 8 }}>
        <Text style={{ ...FONTS.H3, marginLeft: 18, fontSize: 21 }}>
          Categories
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 10 }}>
          <View
            style={{
              backgroundColor: "white",
              paddingStart: 8,
              paddingTop: 8,
              paddingEnd: 8,
              borderRadius: 30,
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.76,
              shadowRadius: 11.14,
              elevation: 17,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("../../images/icons/shirt.png")}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: COLORS.white,
                }}
              ></Image>
              <Text style={{ marginLeft: 10 }}>M1</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginLeft: 10,
              backgroundColor: "white",
              paddingStart: 8,
              paddingTop: 8,
              paddingEnd: 8,
              borderRadius: 30,
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.76,
              shadowRadius: 11.14,
              elevation: 17,
            }}
          >
            <Image
              source={require("../../images/icons/talons-hauts.png")}
              style={{ width: 36, height: 34, marginLeft: 3 }}
            ></Image>
            <Text style={{ marginLeft: 9 }}>M2</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginLeft: 15,
              backgroundColor: "white",
              paddingStart: 8,
              paddingTop: 8,
              paddingEnd: 8,
              borderRadius: 30,
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.76,
              shadowRadius: 11.14,
              elevation: 17,
            }}
          >
            <Image
              source={require("../../images/icons/idee-ampoule.png")}
              style={{ width: 43, height: 43 }}
            ></Image>
            <Text style={{ marginLeft: 13 }}>M3</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginLeft: 15,
              backgroundColor: "white",
              paddingStart: 8,
              paddingTop: 8,
              paddingEnd: 8,
              borderRadius: 30,
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.76,
              shadowRadius: 11.14,
              elevation: 17,
            }}
          >
            <Image
              source={require("../../images/icons/casque-de-musique.png")}
              style={{ width: 41, height: 41 }}
            ></Image>
            <Text style={{ marginLeft: 13 }}>M4</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginLeft: 15,
              backgroundColor: "white",
              paddingStart: 8,
              paddingTop: 8,
              paddingEnd: 8,
              borderRadius: 30,
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.76,
              shadowRadius: 11.14,
              elevation: 17,
            }}
          >
            <Image
              source={require("../../images/icons/manette.png")}
              style={{ width: 43, height: 43 }}
            ></Image>
            <Text style={{ marginLeft: 13 }}>M5</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderFeaturedProducts() {
    return (
      <View style={{ marginTop: 30 }}>
        <Heading
          text="Categories autres"
          onPress={() => navigation.navigate("Shop")}
          containerStyle={{
            paddingHorizontal: 20,
            marginBottom: 16,
          }}
        />
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
                    ></TouchableOpacity>
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
                  >
                    <TouchableOpacity
                      style={{
                        padding: 10,
                      }}
                    >
                      {/* <Heart
                        strokeColor={item.like ? COLORS.carrot : COLORS.gray}
                        fillColor={
                          item.like ? COLORS.carrot : COLORS.transparent
                        }
                      /> */}
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                      style={{
                        padding: 10,
                        color: COLORS.black,
                      }}
                      onPress={() => addToCart(item.name)}
                    >
                      <Bag />
                    </TouchableOpacity> */}
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
                {/* <Rating
                  quantity={3}
                  rating={3}
                  containerStyle={{ marginBottom: 7 }}
                /> */}
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
      </View>
    );
  }

  function renderContent() {
    return (
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {renderBestSellers()}
        {renderFeaturedProducts()}
      </ScrollView>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.bleu,
    marginTop: 20,
    marginBottom: 40,
  },
});
