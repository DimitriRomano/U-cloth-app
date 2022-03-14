import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Modal from "react-native-modal";

import { COLORS, FONTS, SIZES } from "../constants";

import ModalMapPin from "../components/svg/ModalMapPin";
import ModalElement from "../components/svg/ModalElement";
import ContactCategory from "../components/ContactCategory";

export default function MenuModal({ isVisible, onBackdropPress, onPress }) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      style={{ margin: 0 }}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View
        style={{
          width: 270,
          height: SIZES.height,
          backgroundColor: COLORS.black,
          paddingHorizontal: 20,
          paddingTop: 60,
          paddingBottom: 50,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: COLORS.white,
              marginBottom: 14,
            }}
          />
          <Text
            style={{
              ...FONTS.H2,
              color: COLORS.white,
              marginBottom: 10,
            }}
          >
            Contactez-nous
          </Text>
          <ContactCategory
            lineOne="2 place de l'europe, Toulouse 31100"
            lineTwo="31700,Blagnac"
            icon={<ModalMapPin />}
          />
          <ContactCategory
            lineOne="ucloth@gmail.com"
            lineTwo="chehem@gmail.com"
            icon={<ModalMapPin />}
          />
          <ContactCategory
            lineOne="+33  123456789"
            lineTwo="+33  987654321"
            icon={<ModalMapPin />}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#B3B9C7",
              ...FONTS.Mulish_400Regular,
              fontSize: 14,
              lineHeight: 14 * 1.7,
              marginBottom: 18,
            }}
          >
            Suivre votre commande
          </Text>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 50,
              borderColor: "rgba(219,227,245, 0.2)",
              borderWidth: 1,
              borderRadius: 25,
              justifyContent: "center",
              paddingLeft: 30,
              paddingRight: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={onPress}
          >
            <Text
              style={{
                color: "#B3B9C7",
                paddingHorizontal: 10,
                position: "absolute",
                top: -11,
                left: 20,
                backgroundColor: COLORS.black,
                textTransform: "uppercase",
                ...FONTS.Mulish_600SemiBold,
                fontSize: 12,
                lineHeight: 12 * 1.7,
              }}
            >
              numéro de commande
            </Text>
            <Text style={{ color: COLORS.white }}>100345</Text>
            <ModalElement />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
