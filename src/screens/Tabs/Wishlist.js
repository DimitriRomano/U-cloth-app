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

import { TopNav, Line, InputField, Button, Photo } from "../../components";

import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

export default function Wishlist() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <TopNav
        text="Wishlist"
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
        ></ScrollView>
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
