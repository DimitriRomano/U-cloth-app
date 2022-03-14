import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";

import { useNavigation } from "@react-navigation/native";

import { COLORS, ANDROIDSAFEAREAVIEW, FONTS } from "../constants";
import {
  Delivered,
  Shipping,
  Canceled,
  TopNav,
  LeaveAReview,
  RepeatOrder,
} from "../components";

const ORDER_HISTORY = [
  {
    id: "1",
    number: "100345",
    date: "02 octobre 2021, 8h03",
    total: "36.42",
    status: "Shipping",
    dishes: [
      {
        id: "1",
        dishName: "pantalon bleu",
        price: "10.38",
      },
      {
        id: "2",
        dishName: "chemise classique",
        price: "17.83",
      },
    ],
  },
  {
    id: "2",
    number: "100345",
    date: "12 octobre 2021, 8h03",
    total: "84.12",
    status: "Delivered",
    dishes: [
      {
        id: "1",
        dishName: "pull gris",
        price: "10.38",
      },
      {
        id: "2",
        dishName: "Ypull gris",
        price: "17.83",
      },
    ],
  },
  {
    id: "3",
    number: "100345",
    date: "02 octobre 2014, 8h03",
    total: "52.76",
    status: "Delivered",
    dishes: [
      {
        id: "1",
        dishName: "pull gris",
        price: "10.38",
      },
      {
        id: "2",
        dishName: "pull gris",
        price: "17.83",
      },
    ],
  },
  {
    id: "4",
    number: "100345",
    date: "02 novembre 2021, 8h03",
    total: "52.76",
    status: "Canceled",
    dishes: [
      {
        id: "1",
        dishName: "pull gris",
        price: "10.38",
      },
      {
        id: "2",
        dishName: "chemise-patalon",
        price: "17.83",
      },
    ],
  },
  {
    id: "5",
    number: "100345",
    date: "02 octobre 2022, 8h03",
    total: "52.76",
    status: "Delivered",
    dishes: [
      {
        id: "1",
        dishName: "pull gris1",
        price: "10.38",
      },
      {
        id: "2",
        dishName: "Yapull gris",
        price: "17.83",
      },
    ],
  },
];

export default function OrderHistory() {
  const navigation = useNavigation();

  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  function renderHeader(section) {
    return (
      <View
        style={{
          width: "100%",
          borderBottomWidth: 6,
          paddingHorizontal: 20,
          borderBottomColor: COLORS.lightBlue,
          paddingBottom: 20,
          paddingTop: 11,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              ...FONTS.H5,
              color: COLORS.black,
            }}
          >
            {section.number}
          </Text>
          {section.status == "Shipping" && <Shipping />}
          {section.status == "Delivered" && <Delivered />}
          {section.status == "Canceled" && <Canceled />}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.Mulish_400Regular,
              fontSize: 12,
              lineHeight: 12 * 1.5,
            }}
          >
            {section.date}
          </Text>
          <Text
            style={{
              ...FONTS.Mulish_700Bold,
              fontSize: 12,
              color: COLORS.black,
              lineHeight: 12 * 1.5,
            }}
          >
            ${section.total}
          </Text>
        </View>
      </View>
    );
  }

  function renderContent(section) {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: "#F4F7FC",
          borderBottomWidth: 6,
          borderColor: COLORS.lightBlue,
        }}
      >
        {section.dishes.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Mulish_600SemiBold",
                fontSize: 14,
                color: COLORS.gray,
                marginBottom: 10,
              }}
            >
              {item.dishName}
            </Text>
            <Text
              style={{
                fontFamily: "Mulish_600SemiBold",
                fontSize: 14,
                color: COLORS.gray,
              }}
            >
              ${item.price}
            </Text>
          </View>
        ))}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 29,
          }}
        >
          <TouchableOpacity onPress={() => console.log("Repeat Order")}>
            <RepeatOrder />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LeaveAReview")}>
            <LeaveAReview />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      <TopNav
        text="Historique des commandes"
        back={true}
        backOnPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Accordion
          activeSections={activeSections}
          sections={ORDER_HISTORY}
          touchableComponent={TouchableOpacity}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
