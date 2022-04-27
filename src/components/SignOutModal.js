import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";

import Line from "../components/Line";
import { COLORS, FONTS } from "../constants";

export default function SignOutModal({
  isVisible,
  onBackdropPress,
  signOut,
  cancel,
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      style={{ margin: 0 }}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View
        style={{
          width: 335,
          height: 335,
          backgroundColor: COLORS.transparent,
          borderRadius: 200,

          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            width: 292,
            height: 292,
            backgroundColor: COLORS.white,
            borderRadius: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.H3,
              paddingHorizontal: 10,
              marginVertical: 20,
            }}
          >
            Vous voulez déconnecter?
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.bleu,
              marginBottom: 20,
            }}
            onPress={signOut}
          >
            <Text
              style={{
                color: COLORS.white,
                textTransform: "uppercase",
                ...FONTS.Mulish_600SemiBold,
                fontSize: 14,
                paddingHorizontal: 51,
                textAlign: "center",
              }}
            >
              Oui
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cancel}>
            <Text
              style={{
                color: COLORS.black,
                textTransform: "uppercase",
                ...FONTS.Mulish_600SemiBold,
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Annuler
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
