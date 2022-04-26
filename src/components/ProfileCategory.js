import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

import Arrow from "../components/svg/Arrow";

export default function ProfileCategory({
  text,
  sale,
  containerStyle,
  icon,
  rightIcon,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 5,
        ...containerStyle,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: COLORS.lightBlue,
          borderRadius: 8,
          marginRight: 14,
        }}
      >
        {icon}
      </View>
      <Text style={{ flex: 1, ...FONTS.H5, color: COLORS.black }}>{text}</Text>
      {/* {sale && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 92,
            backgroundColor: "#bd1324",
          }}
        >
          <Text
            style={{
              paddingHorizontal: 6,
              paddingVertical: 1,
              textTransform: "uppercase",
              ...FONTS.Mulish_700Bold,
              fontSize: 8,
              color: COLORS.white,
              lineHeight: 8 * 1.7,
            }}
          >
            Nouveau
          </Text>
        </View>
      )} */}
      {rightIcon && (
        <Arrow fillColor={COLORS.black} strokeColor={COLORS.black} />
      )}
    </TouchableOpacity>
  );
}
