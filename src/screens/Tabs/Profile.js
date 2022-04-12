import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
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
import Notif from "../../components/svg/Notif";

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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* <Line containerStyle={{ marginTop: 23, marginBottom: 20 }} /> */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 60,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{ width: 126, height: 126, marginBottom: 20 }}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Image
                source={require("../../images/icons/01.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 63,
                  borderWidth: 6,
                  borderColor: COLORS.lightBlue,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  color: COLORS.bleu,
                }}
              >
                <ProfileEdit />
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginBottom: 50,
                marginTop: 50,
                marginLeft: 10,
              }}
            >
              <Text style={{ ...FONTS.H4, color: COLORS.black }}>
                CHEHEM Mohamed
              </Text>
              <Text
                style={{
                  ...FONTS.Mulish_400Regular,
                  fontSize: 14,
                  color: COLORS.gray,
                  lineHeight: 14 * 1.7,
                  marginBottom: 22,
                  marginLeft: 5,
                  marginTop: 10,
                }}
              >
                chehem21@gmail.com
              </Text>
            </View>
          </View>

          <View style={{ width: "100%" }}>
            <ProfileCategory
              text="Suivi Commande"
              rightIcon={true}
              icon={<MapPin />}
              onPress={() => navigation.navigate("TrackYourOrder")}
            />
            <ProfileCategory
              text="Wishlist"
              rightIcon={true}
              icon={<Calendar />}
              onPress={() => navigation.navigate("Wishlist")}
            />
            <ProfileCategory
              text="Carte"
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
              text="Code Promos"
              rightIcon={true}
              icon={<Gift />}
              onPress={() => navigation.navigate("MyPromoCodes")}
            />
            <ProfileCategory
              text="Notification"
              rightIcon={true}
              icon={<Gift />}
              onPress={() => navigation.navigate("MyPromoCodes")}
            />
            <ProfileCategory
              text="Déconnexion"
              rightIcon={true}
              icon={<Calendar />}
              onPress={() => setShowModal(true)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
