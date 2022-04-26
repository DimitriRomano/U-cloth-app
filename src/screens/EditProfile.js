import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TopNav, Line, InputField, Button, Photo } from "../components";

import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../constants";

export default function EditProfile() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <TopNav
        text="Modifier profile"
        back={true}
        bag={false}
        backOnPress={() => navigation.goBack()}
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
          <TouchableOpacity
            style={{ width: 126, height: 126, marginBottom: 45, marginTop: 10 }}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Image
              source={require("../images/icons/01.png")}
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
              }}
            >
              <Photo />
            </View>
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 20 }}>
            <InputField
              text={"Nom et Prenom"}
              placeholder={"Mohamed"}
              containerStyle={{ marginBottom: 20 }}
            />
            <InputField
              text={"email"}
              placeholder={"mohamed@gmail.com"}
              containerStyle={{ marginBottom: 20 }}
            />
            <InputField
              text={"Telephone"}
              placeholder={"+33 123456789"}
              keyboardType="phone-pad"
              containerStyle={{ marginBottom: 20 }}
            />
            <InputField
              text={"Adresse"}
              placeholder={"Toulouse"}
              containerStyle={{ marginBottom: 20 }}
            />
          </View>
          <View
            style={{
              width: 255,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.bleu,
              alignSelf: "center",
              marginBottom: 30,
              marginTop: 10,
            }}
            onPress={() => navigation.navigate("MainLayout")}
          >
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: 14,
                color: COLORS.white,
              }}
            >
              Connexion
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
}
