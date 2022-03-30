import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  TopNav,
  MenuModal,
  Heart,
  Bag,
  Rating,
  Heading,
} from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

const CATEGORIES = [
  {
    id: "1",
    text: "Men",
  },
  {
    id: "2",
    text: "woMen",
  },
  {
    id: "3",
    text: "kids",
  },
  {
    id: "4",
    text: "kids",
  },
  {
    id: "5",
    text: "accessories",
  },
];

const CLOTHING_CATEGORIES = [
  {
    id: "1",
    name: "Summer dress",
    price: "29.95",
    oldPrice: "38.00",
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

export default function Search() {
  const [category, setCategory] = useState(0);

  function renderHeader() {
    return (
      <TopNav
        search={true}
        menu={true}
        bag={true}
        containerStyle={{
          borderBottomWidth: 1,
          borderColor: COLORS.lightBlue,
        }}
        menuOnPress={() => setShowModal(true)}
      />
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
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View
                style={{
                  width: 200,
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
                    <TouchableOpacity
                      style={{
                        padding: 10,
                      }}
                      onPress={() => addToCart(item.name)}
                    >
                      <Bag />
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
                <Rating
                  quantity={3}
                  rating={3}
                  containerStyle={{ marginBottom: 7 }}
                />
                <Text
                  style={{
                    fontFamily: "Mulish_400Regular",
                    fontSize: 14,
                    color: COLORS.gray,
                    lineHeight: 14 * 1.7,
                  }}
                >
                  {item.name}
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
          {/* {CLOTHING_CATEGORIES.map((item, index) => {
            if (index == 0) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
          })} */}
        </View>
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
