import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import {
  TopNav,
  Line,
  ProfileCategory,
  Calendar,
  Card,
  MapPin,
  Gift,
  ProfileEdit,
  SignOutModal,
} from "../../components";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS } from "../../constants";

export default function Profile() {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);

  function renderHeader() {
    return (
      <TopNav
        text="Mon Profil"
        menu={true}
        bag={true}
        containerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightBlue,
        }}
      />
    );
  }

  function renderContent() {
    return (
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Line containerStyle={{ marginTop: 23, marginBottom: 20 }} />
        <TouchableOpacity
          style={{ width: 126, height: 126, marginBottom: 20 }}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Image
            source={require("../../images/icons/11.png")}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 63,
              borderWidth: 6,
              borderColor: COLORS.lightBlue,
            }}
          />
          <View style={{ position: "absolute", right: 0, bottom: 0 }}>
            <ProfileEdit />
          </View>
        </TouchableOpacity>

        <Text style={{ ...FONTS.H3, color: COLORS.black }}>Mohamed Chehem</Text>
        <Text
          style={{
            ...FONTS.Mulish_400Regular,
            fontSize: 14,
            color: COLORS.gray,
            lineHeight: 14 * 1.7,
            marginBottom: 22,
          }}
        >
          mohamedchehem21@gmail.com
        </Text>
        <View style={{ width: "100%" }}>
          <ProfileCategory
            text="History des commandes"
            rightIcon={true}
            icon={<Calendar />}
            onPress={() => navigation.navigate("OrderHistory")}
          />
          <ProfileCategory
            text="Mode de Paiement"
            rightIcon={true}
            icon={<Card />}
            onPress={() => navigation.navigate("PaymentMethod")}
          />
          <ProfileCategory
            text="Adresse"
            rightIcon={true}
            icon={<MapPin />}
            onPress={() => navigation.navigate("MyAddress")}
          />
          <ProfileCategory
            text="Code Promo"
            rightIcon={true}
            icon={<Gift />}
            onPress={() => navigation.navigate("MyPromoCodes")}
          />
          <ProfileCategory
            text="Deconnecter"
            icon={<Calendar />}
            onPress={() => setShowModal(true)}
          />
        </View>
      </ScrollView>
    );
  }

  function renderModal() {
    return (
      <View style={{ alignSelf: "center" }}>
        <SignOutModal
          isVisible={showModal}
          onBackdropPress={() => setShowModal(false)}
          signOut={() => {
            setShowModal(false);
            navigation.navigate("SignIn");
          }}
          cancel={() => setShowModal(false)}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderContent()}
      {renderModal()}
    </View>
  );
}
