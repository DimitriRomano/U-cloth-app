import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Rating, Heading } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../constants";

const COMMENTS = [
  {
    id: "1",
    name: "Mohamed Chehem",
    photo: require("../images/icons/02.png"),
    date: "23 Jan 2022",
    comment: "je suis satisfait de la date de livraison",
    rating: 3,
  },
  {
    id: "2",
    name: "Iba Watta",
    photo: require("../images/icons/03.png"),
    date: "23 Jan 2022",
    comment:
      "Toute l’équipe, et notamment l’équipe travaux, vous remercie infiniment pour votre retour. Votre maison a déjà bien avancé. Nous sommes heureux que vous puissiez vivre votre projet pleinement et sans surprise. Nous avons hâte de découvrir vos prochains retours. Ce sont des moments de reconnaissance importants pour nous",
    rating: 3,
  },
  {
    id: "3",
    name: "Aden Houmed",
    photo: require("../images/icons/04.png"),
    date: "23 Jan 2022",
    comment: "Le respect des délais et même avec 48 h d'avance...bravo !",
    rating: 3,
  },
  {
    id: "4",
    name: "Zeinaba Chehem",
    photo: require("../images/icons/05.png"),
    date: "23 Jan 2022",
    comment: "PARFAIT ET UN PRIX DEFIANT TOUTE CONCURRENCE",
    rating: 3,
  },
];
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
    image: require("../images/categories/robe.jpg"),
  },
  {
    id: "2",
    name: "Summer dress",
    price: "29.95",
    oldPrice: "38.00",
    description: "pull",
    discount: "50% off",
    rating: "3.0",
    sale: false,
    like: true,
    image: require("../images/products/pull.jpg"),
  },
];

export default function Reviews() {
  const navigation = useNavigation();

  // function renderHeader() {
  //   return (

  //   );
  // }

  function renderContent() {
    return (
      <ScrollView>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../images/logos/mahami.png")}
              style={{ width: 200, height: 100, marginLeft: 10 }}
            ></Image>
            <Image
              source={require("../images/logos/utilisateur.png")}
              style={{ width: 50, height: 50, marginTop: 23, marginLeft: 40 }}
            ></Image>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image
              source={require("../images/products/pull.jpg")}
              style={{ width: 300, height: 190 }}
            ></Image>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                ...FONTS.H3,
                fontSize: 16,
                marginLeft: 13,
                fontWeight: "bold",
              }}
            >
              Dernières marques recherchées
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 18 }}>
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
                  source={require("../images/icons/adidas.png")}
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
                  source={require("../images/icons/puma.png")}
                  style={{ width: 40, height: 40, borderRadius: 5 }}
                ></Image>
              </View>
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ ...FONTS.H4 }}>Puma</Text>
                <Text>300 produits</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Heading
              text="Recommandation"
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
                      ></View>
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
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {/* {renderHeader()} */}
      {renderContent()}
    </SafeAreaView>
  );
}
