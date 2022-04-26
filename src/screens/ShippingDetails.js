import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const GOOGLE_MAPS_APIKEY = "AIzaSyDaG8heb2urT4EICboyOWL_2dcwSOq9ubI";

import { TopNav, Select, Line, TrackCategory, Track } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../constants";

const ADDRESS = [
  {
    id: "1",
    type: "Livraison Standard",
    address: "La commande sera livré entre 3 et 5 jours ouvrables ",
  },
  {
    id: "2",
    type: "VIP Livraison",
    address:
      "Passez votre commande avant 18h et vos articles seront livrées le lendemain",
  },
  {
    id: "3",
    type: "Point Relay",
    address: "Choisisiez une date particulière dans le calendrier",
  },
];

const Suivie = [
  {
    id: "6",
    type: "Livraison",
  },
];
const Suivie1 = [
  {
    id: "4",
    type: "Adresse",
  },
];
const Suivie2 = [
  {
    id: "5",
    type: "Paiement",
  },
];

export default function ShippingDetails() {
  const navigation = useNavigation();

  const [selectCreditCard, setSelectCreditCard] = useState(1);
  const [selectAddress, setSelectedAddress] = useState(false);

  function renderHeader() {
    return (
      <TopNav
        text="Checkout"
        back={true}
        backOnPress={() => navigation.goBack()}
      />
    );
  }

  function renderDetails() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <View>
              {Suivie.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      paddingHorizontal: 20,
                      paddingTop: 20,
                      paddingBottom: 10,

                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                    onPress={() => {
                      setSelectedAddress(false);
                      setSelectCreditCard(index);
                    }}
                  >
                    <View>
                      <View style={{ marginLeft: 15 }}>
                        <Select
                          isSelect={selectCreditCard == index ? true : false}
                          containerStyle={{ marginTop: 5 }}
                        />
                      </View>
                      <View style={{ marginTop: 6 }}>
                        <Text
                          style={{
                            ...FONTS.H5,
                            color: COLORS.black,
                            marginBottom: 4,
                          }}
                        >
                          {item.type}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View>
              {Suivie1.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      paddingHorizontal: 20,
                      paddingTop: 20,
                      paddingBottom: 10,

                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                    onPress={() => {
                      setSelectedAddress(false);
                      setSelectCreditCard(index);
                    }}
                  >
                    <View>
                      <View style={{ marginLeft: 15 }}>
                        <Select
                          isSelect={selectCreditCard == index ? true : false}
                          containerStyle={{ marginTop: 5 }}
                        />
                      </View>
                      <View style={{ marginTop: 6 }}>
                        <Text
                          style={{
                            ...FONTS.H5,
                            color: COLORS.black,
                            marginBottom: 4,
                          }}
                        >
                          {item.type}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View>
              {Suivie2.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      paddingHorizontal: 20,
                      paddingTop: 20,
                      paddingBottom: 10,

                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                    onPress={() => {
                      setSelectedAddress(false);
                      setSelectCreditCard(index);
                    }}
                  >
                    <View>
                      <View style={{ marginLeft: 15 }}>
                        <Select
                          isSelect={selectCreditCard == index ? true : false}
                          containerStyle={{ marginTop: 5 }}
                        />
                      </View>
                      <View style={{ marginTop: 6 }}>
                        <Text
                          style={{
                            ...FONTS.H5,
                            color: COLORS.black,
                            marginBottom: 4,
                          }}
                        >
                          {item.type}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {ADDRESS.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  paddingHorizontal: 20,
                  paddingTop: 20,
                  paddingBottom: 10,

                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
                onPress={() => {
                  setSelectedAddress(false);
                  setSelectCreditCard(index);
                }}
              >
                <View>
                  <Text
                    style={{
                      ...FONTS.H5,
                      color: COLORS.black,
                      fontWeight: "bold",
                      marginBottom: 4,
                    }}
                  >
                    {item.type}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: COLORS.black,
                    }}
                  >
                    {item.address}
                  </Text>
                </View>
                <Select
                  isSelect={selectCreditCard == index ? true : false}
                  containerStyle={{ marginTop: 5 }}
                />
              </TouchableOpacity>
            );
          })}
          {/* <TouchableOpacity
            style={{
              marginTop: 20,
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
            onPress={() => {
              setSelectCreditCard(null);
              setSelectedAddress(true);
            }}
          ></TouchableOpacity> */}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  function renderButton() {
    return (
      <ScrollView showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={{
            width: 160,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.bleu,
            alignSelf: "center",
            marginLeft: 110,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("VerifyNumber")}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 14,
              color: COLORS.white,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
      {/* {renderMap()} */}
      {renderDetails()}
      {renderButton()}
    </SafeAreaView>
  );
}
