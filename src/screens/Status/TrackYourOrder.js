import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TopNav, Track, Line, TrackCategory } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../../constants";

export default function TrackYourOrder() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <TopNav
        text="Merci pour la commande"
        back={true}
        backOnPress={() => navigation.goBack()}
      />
    );
  }

  function renderContent() {
    return (
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 26, marginBottom: 20 }}>
          <Track />
        </View>
        <Line containerStyle={{ marginBottom: 20 }} />
        <Text
          style={{
            ...FONTS.H3,
            color: COLORS.black,
            marginBottom: 4,
          }}
        >
          Votre commande:
        </Text>
        <Text
          style={{
            marginBottom: 30,
            ...FONTS.Mulish_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: COLORS.gray,
          }}
        >
          {"#100345"}
        </Text>
        <View
          style={{
            width: SIZES.width,
            paddingHorizontal: 40,
            marginBottom: 30,
          }}
        >
          <TrackCategory
            line={true}
            performed={true}
            status="Commande créée"
            comment="Nous avons reçu votre commande"
          />
          <TrackCategory
            line={true}
            performed={true}
            status="Commande confirmée"
            comment="Votre commande a été confirmée"
          />
          <TrackCategory
            line={true}
            performed={true}
            status="Expédition de la commande"
            comment="Estimé pour le 02 février 2022"
          />
          <TrackCategory
            line={true}
            status="Courrier livrant"
            comment="Estimé pour le 05 février 2022"
          />
          <TrackCategory
            status="Reception"
            comment="Estimé pour le 05 février 2022"
          />
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
