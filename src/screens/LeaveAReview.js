import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { TopNav, Comment, Line, BigStar, Button } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../constants";

import { useNavigation } from "@react-navigation/native";

export default function LeaveAReview() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <TopNav
        text="Ecrire un avis"
        navigation={true}
        backOnPress={() => console.log("Go to back")}
        back={true}
      />
    );
  }

  function renderContent() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={Platform.OS !== "android" && { flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={{
              ...FONTS.H2,
              color: COLORS.black,
              lineHeight: 22 * 1.2,
              marginBottom: 20,
              fontWeight: "bold",
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          >
            Noté vos derniers achats
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 25,
            }}
          >
            <View style={{ marginHorizontal: 3.5 }}>
              <BigStar />
            </View>
            <View style={{ marginHorizontal: 3.5 }}>
              <BigStar />
            </View>
            <View style={{ marginHorizontal: 3.5 }}>
              <BigStar />
            </View>
            <View style={{ marginHorizontal: 3.5 }}>
              <BigStar />
            </View>
            <View style={{ marginHorizontal: 3.5 }}>
              <BigStar />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              height: 131,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: COLORS.lightBlue,
              marginBottom: 20,
            }}
          >
            <TextInput
              style={{
                width: "100%",
                height: "100%",
                paddingHorizontal: 30,
                paddingTop: 23,
                paddingBottom: 23,
              }}
              placeholder="Dis nous votre avis"
              textAlignVertical="top"
            />
            <View
              style={{
                position: "absolute",
                top: -10,
                left: 20,
                paddingHorizontal: 10,
                backgroundColor: COLORS.white,
              }}
            >
              <Text
                style={{
                  color: COLORS.gray,
                  fontFamily: "Mulish_600SemiBold",
                  fontSize: 12,
                  textTransform: "uppercase",
                }}
              >
                Commentaire
              </Text>
            </View>
          </View>
          {/* <Button
            text="submit"
            backgroundColor={{ color: COLORS.black }}
            onPress={() => navigation.navigate("Reviews")}
            containerStyle={{ marginBottom: 30 }}
          /> */}
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.bleu,
              alignSelf: "center",
              marginBottom: 30,
              marginLeft: 120,
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
              VAlider
            </Text>
          </TouchableOpacity>
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
