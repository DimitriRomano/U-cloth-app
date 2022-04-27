import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

import {
  TopNav,
  ProductLike,
  Rating,
  Button,
  Plus,
  Minus,
  ViewAll,
} from "../components";
import { ANDROIDSAFEAREAVIEW, SIZES, COLORS, FONTS } from "../constants";

const SLIDE = [
  {
    id: "1",
    image: require("../images/products/pull.jpg"),
  },
];

const FOOTER = [
  {
    id: "1",
    image: require("../images/banner/fond.jpg"),
  },
];

const PRODUCT_SIZES = [
  {
    id: "1",
    size: "xs",
  },
  {
    id: "2",
    size: "s",
  },
  {
    id: "3",
    size: "m",
  },
  {
    id: "4",
    size: "l",
  },
  {
    id: "5",
    size: "xl",
  },
  {
    id: "6",
    size: "xxl",
  },
];

const PRODUCT_COLORS = [
  {
    id: "1",
    color: "#FF6262",
  },
  {
    id: "2",
    color: "#63C7FF",
  },
  {
    id: "3",
    color: "#F8E7CD",
  },
  {
    id: "4",
    color: "#323858",
  },
  {
    id: "5",
    color: "#111111",
  },
];

const PRODUCT_COMMENTS = [
  {
    id: "1",
    name: "Chehem",
    photo: require("../images/icons/01.png"),
    date: "23 janvier 2022",
    comment:
      "Toute l’équipe vous remercie pour votre retour, Nous sommes heureux de savoir que vous êtes satisfait",
    rating: 3,
  },
  {
    id: "2",
    name: "Fatouma",
    photo: require("../images/icons/01.png"),
    date: "12 avril 2022",
    comment:
      "Toute l’équipe, et notamment l’équipe travaux, vous remercie infiniment pour votre retour. Votre maison a déjà bien avancé.",
    rating: 3,
  },
  {
    id: "3",
    name: "Zeinaba",
    photo: require("../images/icons/01.png"),
    date: "23 juin 2022",
    comment:
      " Nous sommes heureux que vous puissiez vivre votre projet pleinement et sans surprise. ",
    rating: 3,
  },
  {
    id: "4",
    name: "Ahmed",
    photo: require("../images/icons/01.png"),
    date: "23 octobre 2022",
    comment: " Nous avons hâte de découvrir vos prochains retours.",
    rating: 3,
  },
];

export default function Product() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [productSize, setProductSize] = useState(1);
  const [productColor, setProductColor] = useState(1);
  const [productQuantity, setProductQuantity] = useState(1);
  const [productLike, setProductLike] = useState(false);

  function updateCurrentSlideIndex(e) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  const navigation = useNavigation();

  function renderEssaie() {
    return (
      <View>
        <View>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../images/products/pull.jpg")}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "center",
                with: "100%",
                height: 150,
              }}
            >
              <TopNav
                back={true}
                backOnPress={() => navigation.goBack()}
              ></TopNav>
            </ImageBackground>
          </View>
        </View>
        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                ...FONTS.H3,
                color: COLORS.black,
              }}
            >
              Pull pour homme
            </Text>
            <TouchableOpacity
              onPress={() => {
                setProductLike(!productLike);
              }}
            >
              <ProductLike
                strokeColor={productLike ? COLORS.carrot : COLORS.bleu}
                fillColor={productLike ? COLORS.carrot : COLORS.bleu}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: 5,
            }}
          >
            <Text
              style={{
                ...FONTS.Mulish_600SemiBold,
                fontSize: 20,
                color: COLORS.black,
              }}
            >
              $37.88
            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: COLORS.lightBlue,
                marginTop: 8,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 25,
                  paddingVertical: 22,
                }}
                onPress={() =>
                  productQuantity > 1 && setProductQuantity(productQuantity - 1)
                }
              >
                <Minus strokeColor={COLORS.black} />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Mulish_600SemiBold",
                  color: COLORS.gray,
                  fontSize: 14,
                  paddingHorizontal: 10,
                }}
              >
                {productQuantity}
              </Text>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 25,
                  paddingVertical: 22,
                }}
                onPress={() =>
                  productQuantity > 0 && setProductQuantity(productQuantity + 1)
                }
              >
                <Plus strokeColor={COLORS.black} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                ...FONTS.H5,
                color: COLORS.black,
                marginTop: 20,
                marginBottom: 14,
              }}
            >
              Size
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 25,
              }}
            >
              {PRODUCT_SIZES.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderColor: COLORS.lightBlue,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    backgroundColor:
                      productSize == index
                        ? COLORS.lightBlue
                        : COLORS.transparent,
                  }}
                  onPress={() => setProductSize(index)}
                >
                  <Text
                    style={{
                      ...FONTS.Mulish_600SemiBold,
                      fontSize: 12,
                      textTransform: "uppercase",
                      color: COLORS.black,
                    }}
                  >
                    {item.size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                ...FONTS.H5,
                color: COLORS.black,
                marginTop: 20,
                marginBottom: 14,
                marginRight: 25,
              }}
            >
              Color
            </Text>

            {PRODUCT_COLORS.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setProductColor(index)}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: item.color,
                    marginHorizontal: 7,
                    borderRadius: 15,
                    borderWidth: 4,
                    borderColor:
                      productColor == index
                        ? COLORS.lightBlue
                        : COLORS.transparent,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              ...FONTS.H5,
              color: COLORS.black,
              marginBottom: 14,
            }}
          >
            Détails
          </Text>
          <Text
            style={{
              ...FONTS.Mulish_400Regular,
              fontSize: 16,
              lineHeight: 16 * 1.7,
              color: COLORS.gray,
              marginBottom: 20,
            }}
          >
            Ce blouson avec un intérieur fourré va vous tenir agréablement chaud
            ! La maille anglaise lui donne ce style si britannique que l'on aime
            tant.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ color: COLORS.bleu }}>Lire</Text>
            </View>
            <View style={{ marginTop: 3, marginLeft: 2 }}>
              <Plus strokeColor={COLORS.bleu} />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 18 }}>
          <View
            style={{
              paddingHorizontal: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.H3, color: COLORS.black }}>
              Commentaires
            </Text>
          </View>
          <View style={{ marginLeft: 21, marginTop: 5 }}>
            <Text
              style={{ color: COLORS.bleu, textDecorationLine: "underline" }}
            >
              Clic ici pour écrire un Commentaire
            </Text>
          </View>
          {PRODUCT_COMMENTS.map((item, index, array) => {
            return (
              <View
                key={item.id}
                style={{
                  width: "100%",
                  paddingVertical: 20,
                  borderColor: COLORS.lightBlue,
                  borderBottomWidth: array.length - 1 === index ? 0 : 1,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <Image
                  source={item.photo}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 14,
                  }}
                />
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H5,
                        color: COLORS.black,
                        lineHeight: 16 * 1.2,
                        marginBottom: 6,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Rating rating={item.rating} />
                  </View>
                  <Text
                    style={{
                      ...FONTS.Mulish_400Regular,
                      fontSize: 10,
                      color: COLORS.gray,
                      lineHeight: 10 * 1.5,
                      marginBottom: 10,
                    }}
                  >
                    {item.date}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.Mulish_400Regular,
                      fontSize: 14,
                      lineHeight: 14 * 1.5,
                      color: COLORS.gray,
                    }}
                  >
                    {item.comment}
                  </Text>
                </View>
              </View>
            );
          })}
          {FOOTER.map((item, index) => (
            <ImageBackground
              key={item.id}
              source={item.image}
              style={{
                width: SIZES.width,
                height: 100,
                paddingHorizontal: 0,
                paddingVertical: 25,
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
                    <View style={{ flexDirection: "column" }}>
                      <View>
                        <Text
                          style={{
                            fontFamily: "Mulish_400Regular",
                            fontSize: 16,
                            lineHeight: 16 * 1.7,
                            fontWeight: "bold",
                            color: COLORS.black,
                          }}
                        >
                          Prix
                        </Text>
                      </View>
                      <View style={{ marginLeft: 5 }}>
                        <Text
                          style={{
                            color: COLORS.bleu,
                            fontWeight: "bold",
                            fontSize: 18,
                          }}
                        >
                          50
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 170,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.bleu,
                      alignSelf: "center",
                      marginLeft: 80,
                    }}
                  >
                    <Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: COLORS.white,
                      }}
                      onPress={() => navigation.navigate("Home")}
                    >
                      Aller vers le site
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          ))}
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderEssaie()}
      </ScrollView>
    </SafeAreaView>
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
    marginVertical: 20,
  },
});
