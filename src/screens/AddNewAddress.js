import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Shadow } from "react-native-shadow-2";

const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDaG8heb2urT4EICboyOWL_2dcwSOq9ubI";

import { COLORS, LINE, SIZES, SHADOW_PRESET } from "../constants";
import { Back, Call, Button, Select, InputField } from "../components";

import { TopNav, CategoryCheck } from "../components";
import { ANDROIDSAFEAREAVIEW } from "../constants";

import { useNavigation } from "@react-navigation/native";

export default function AddNewAddress() {
  const navigation = useNavigation();

  const [rememberMe, setRememberMe] = useState(false);

  const mapView = useRef();
  const initialRegion = {
    latitude: 25.237604,
    longitude: 55.35744,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const origin = { latitude: 25.28106, longitude: 55.38622 };
  const destination = { latitude: 25.293511, longitude: 55.40052 };

  function renderHeader() {
    return (
      <TopNav
        text="Checkout"
        back={true}
        backOnPress={() => navigation.goBack()}
      />
    );
  }

  function renderContent() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <View
          style={{
            width: SIZES.width,
          }}
        >
          <ScrollView
            style={{
              backgroundColor: COLORS.white,
              paddingHorizontal: 20,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View>
                <Image
                  source={require("../images/icons/check.png")}
                  style={{ width: 20, height: 20, marginTop: 10 }}
                ></Image>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text>
                  l'adresse de facturation est la même que l'adresse de
                  livraison
                </Text>
              </View>
            </View>
            <InputField
              text="Rue 1"
              placeholder="adresse"
              containerStyle={{
                marginTop: 30,
                marginBottom: 32,
              }}
            />
            <InputField
              text="complement ici"
              placeholder="adresse"
              containerStyle={{
                marginBottom: 32,
              }}
            />
            <InputField
              text="Ville"
              placeholder="toulouse"
              containerStyle={{
                marginBottom: 32,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 140, height: 50 }}>
                <InputField
                  text="Région"
                  placeholder="occitanie"
                  containerStyle={{
                    marginBottom: 32,
                  }}
                />
              </View>
              <View style={{ width: 140, height: 50, marginLeft: 5 }}>
                <InputField
                  text="Pays"
                  placeholder="france"
                  containerStyle={{
                    marginBottom: 32,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
              onPress={() => {
                setRememberMe((rememberMe) => !rememberMe);
              }}
            >
              {/* <View
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: COLORS.lightBlue,
                    marginRight: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {rememberMe == true && <CategoryCheck />}
                </View>
                <Text
                  style={{
                    fontFamily: "Mulish_400Regular",
                    fontSize: 16,
                    lineHeight: 16 * 1.7,
                    color: COLORS.gray,
                  }}
                >
                  Use current location
                </Text> */}
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <View style={{ borderColor: "black" }}>
                <TouchableOpacity
                  style={{
                    width: 125,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginBottom: 30,
                    borderColor: COLORS.bleu,
                    borderBottomWidth: 4,
                    borderEndWidth: 4,
                    borderRightWidth: 4,
                    borderLeftWidth: 4,
                    borderStartWidth: 4,
                    borderTopWidth: 4,
                  }}
                  onPress={() => navigation.navigate("VerifyNumber")}
                >
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontSize: 14,
                      color: COLORS.black,
                      borderColor: COLORS.bleu,
                    }}
                  >
                    RETOUR
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 10 }}>
                <TouchableOpacity
                  style={{
                    width: 125,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.bleu,
                    alignSelf: "center",
                    marginBottom: 30,
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
                    SUIVANT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
      {/* {renderMap()} */}
      {renderContent()}
    </SafeAreaView>
  );
}
