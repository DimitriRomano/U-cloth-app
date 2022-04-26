import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Rating, Heading } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../constants";

export default function Summary() {
  const navigation = useNavigation();

  function renderHeader() {
    return <TopNav text="Summary" />;
  }

 
  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
    </SafeAreaView>
  );
}
