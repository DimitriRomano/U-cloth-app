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

import { Bag, TopNav, Heart, Rating, Heading } from "../../components";
import { COLORS, SIZES, FONTS } from "../../constants";

const SLIDE = [
  {
    id: "1",
    // description: "Bienvenue à U-Cloth!",
    // discount: "50% reduction",
    image: require("../../images/slide/01.png"),
  },
  {
    id: "2",
    // description: "Bienvenue à U-Cloth!",
    // discount: "50% reduction",
    image: require("../../images/slide/02.png"),
  },
  {
    id: "3",
    // description: "Bienvenue à U-Cloth!",
    // discount: "50% reduction",
    image: require("../../images/slide/03.png"),
  },
];

const BEST_SELLERS = [
  {
    id: "1",
    name: "Chemise",
    price: "29.95",
    discount: "50% ",
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
    discount: "50% ",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/02.png"),
  },
  {
    id: "3",
    name: "Sous vêtements",
    price: "29.95",
    discount: "50% ",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/03.png"),
  },
  {
    id: "4",
    name: "pull femme",
    price: "29.95",
    oldPrice: "38.00",
    discount: "50% ",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/01.png"),
  },
  {
    id: "5",
    name: "pantalon",
    price: "29.95",
    discount: "50% ",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/03.png"),
  },
];

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "jeans",
    price: "42.89",
    discount: "50% ",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/12.png"),
  },
  {
    id: "2",
    name: "Robe",
    price: "30.00",
    oldPrice: "38.00",
    discount: "50% ",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/13.png"),
  },
  {
    id: "3",
    name: "Manteaux",
    price: "54.96",
    discount: "50% ",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/14.png"),
  },
  {
    id: "4",
    name: "T-shirt",
    price: "12.95",
    oldPrice: "15.00",
    discount: "50% ",
    rating: "3.0",
    sale: true,
    like: true,
    image: require("../../images/products/15.png"),
  },
  {
    id: "5",
    name: "Hand bag",
    price: "24.95",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: false,
    image: require("../../images/products/07.png"),
  },
];

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const navigation = useNavigation();

  function updateCurrentSlideIndex(e) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  function renderHeader() {
    return (
      <TopNav
        menu={false}
        search={true}
        containerStyle={{
          borderBottomWidth: 1,
          borderColor: COLORS.lightBlue,
        }}
        bag={false}
      />
    );
  }

  // function renderBanner() {
  //   const updatmahami = containerstyle ={
  //     borderBottomWidth= Mohalmed chehel
  //   }
  // }

  function renderSlide() {
    function renderDots() {
      return (
        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {SLIDE.map((_, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentSlideIndex == index && {
                      width: 22,
                    },
                  ]}
                />
              );
            })}
          </View>
        </View>
      );
    }

    return (
      <View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        >
          {SLIDE.map((item, index) => (
            <ImageBackground
              key={item.id}
              source={item.image}
              style={{
                width: SIZES.width,
                height: 300,
                paddingHorizontal: 20,
                paddingVertical: 25,
              }}
            >
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View
                  style={{
                    width: 1,
                    height: 30,
                    backgroundColor: COLORS.white,
                    marginBottom: 20,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.H1,
                    color: COLORS.white,
                    width: 190,
                  }}
                >
                  {item.description}
                </Text>
                <Text
                  style={{
                    ...FONTS.H1,
                    color: COLORS.white,
                    width: 190,
                  }}
                >
                  {item.discount}
                </Text>
              </View>
            </ImageBackground>
          ))}
        </ScrollView>
        {renderDots()}
      </View>
    );
  }

  function addToCart(name) {
    return showMessage({
      message: "Success",
      description: `${name} is added to the cart.`,
      type: "success",
    });
  }

  function renderBestSellers() {
    return (
      <View>
        <Heading
          text="Meilleures ventes"
          containerStyle={{ marginBottom: 16, paddingHorizontal: 20 }}
          onPress={() => navigation.navigate("Shop")}
        />
        <View>
          <FlatList
            data={BEST_SELLERS}
            horizontal={true}
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
                        vendre
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
        </View>
      </View>
    );
  }

  function renderBanner() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
        <ImageBackground
          style={{
            width: SIZES.width,
            height: 150,
            marginVertical: 40,
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
          source={require("../../images/banner/01.png")}
        >
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Text style={{ ...FONTS.H2, color: COLORS.black }}>
              {/* Bénéficiez de 50% de réduction maintenant! */}
            </Text>
            <Text style={{ ...FONTS.H2, color: COLORS.black }}>
              {/* Bénéficiez de 50% de réduction maintenant! */}
            </Text>
            <View
              style={{
                paddingHorizontal: 34.5,
                paddingVertical: 14,
                backgroundColor: COLORS.golden,
                alignSelf: "flex-start",
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: "Mulish_600SemiBold",
                  fontSize: 14,
                  textTransform: "uppercase",
                  color: COLORS.black,
                }}
              >
                Achetez maintenant
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  function renderFeaturedProducts() {
    return (
      <View>
        <Heading
          text="Produits populaires"
          onPress={() => navigation.navigate("Shop")}
          containerStyle={{
            paddingHorizontal: 20,
            marginBottom: 16,
          }}
        />

        <FlatList
          data={FEATURED_PRODUCTS}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
          renderItem={({ item, index }) => (
            <View style={{ width: 138, marginRight: 14 }}>
              <TouchableOpacity
                style={{
                  height: 170,
                  backgroundColor: COLORS.lightBlue,
                  marginBottom: 6,
                }}
                onPress={() => navigation.navigate("Shop")}
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
                      fillColor={item.like ? COLORS.carrot : COLORS.transparent}
                      strokeColor={item.like ? COLORS.carrot : COLORS.gray}
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
              <Rating rating={3} quantity={3} />
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
        />
      </View>
    );
  }

  function renderContent() {
    return (
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {renderSlide()}
        {renderBestSellers()}
        {renderBanner()}
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
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.black,
    marginTop: 20,
    marginBottom: 40,
  },
});
