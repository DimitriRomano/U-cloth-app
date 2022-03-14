import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Rating } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../constants";

const COMMENTS = [
  {
    id: "1",
    name: "Ibrahim watta",
    photo: require("../images/icons/02.png"),
    date: "23 Jan 2022",
    comment:
      "Après un achat de 3 disques durs que j'ai renvoyé pour remboursement (faute de compatibilité avec mon matériel) je reçois un mail qui me dit que 2 des disques ont bien été reçus mais que le 3eme n'est pas le produit que j'avais commandé, le tout dans un mail type mi-français mi-anglais, impossible de parler à une vraie personne et la décision est sans appel. ",
    rating: 3,
  },
  {
    id: "2",
    name: "Ahmed chehem",
    photo: require("../images/icons/03.png"),
    date: "23 Jan 2022",
    comment:
      "Nous avons vraiment été encouragés par votre commentaire. Nous apprécions vraiment le temps que vous avez pris pour rédiger une évaluation aussi détaillée !",
    rating: 3,
  },
  {
    id: "3",
    name: "Mohamed Houmed",
    photo: require("../images/icons/04.png"),
    date: "23 Jan 2022",
    comment:
      "Très satisfaite Articles reçus en 2 jours Items conforme aux photos Taille conforme",
    rating: 3,
  },
  {
    id: "4",
    name: "Aden Ali",
    photo: require("../images/icons/05.png"),
    date: "23 Jan 2022",
    comment:
      "Très satisfaite Articles reçus en 2 jours Items conforme aux photos Taille conforme",
    rating: 3,
  },
  {
    id: "5",
    name: "Omar Daoud",
    photo: require("../images/icons/06.png"),
    date: "23 Jan 2022",
    comment:
      "Très satisfaite Articles reçus en 2 jours Items conforme aux photos Taille conforme",
    rating: 3,
  },
  {
    id: "6",
    name: "jordan ",
    photo: require("../images/icons/07.png"),
    date: "23 Jan 2022",
    comment:
      "Très satisfaite Articles reçus en 2 jours Items conforme aux photos Taille conforme",
    rating: 3,
  },
  {
    id: "7",
    name: "Lucas",
    photo: require("../images/icons/08.png"),
    date: "23 Jan 2022",
    comment:
      "Très satisfaite Articles reçus en 2 jours Items conforme aux photos Taille conforme",
    rating: 3,
  },
  {
    id: "8",
    name: "Zeinaba",
    photo: require("../images/icons/09.png"),
    date: "23 Jan 2022",
    comment:
      "Très satisfaite Articles reçus en 2 jours Items conforme aux photos Taille conforme",
    rating: 3,
  },
  {
    id: "9",
    name: "Zeinaba",
    photo: require("../images/icons/10.png"),
    date: "23 Jan 2022",
    comment:
      "Très satisfaite Articles reçus en 2 jours Items conforme aux photos Taille conforme",
    rating: 3,
  },
];

export default function Reviews() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <TopNav
        text="Commentaires"
        navigation={true}
        backOnPress={() => navigation.goBack()}
        back={true}
      />
    );
  }

  function renderContent() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {COMMENTS.map((item, index, array) => {
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
                  }}
                >
                  {item.comment}
                </Text>
              </View>
            </View>
          );
        })}
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
