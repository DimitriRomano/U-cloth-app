import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

import { TopNav, MenuModal } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

const CATEGORIES = [
  {
    id: "1",
    text: "Homme",
  },
  {
    id: "2",
    text: "Femme",
  },
  {
    id: "3",
    text: "Enfants",
  },
  {
    id: "4",
    text: "Ados",
  },
  {
    id: "5",
    text: "accessories",
  },
];

const CLOTHING_CATEGORIES = [
  {
    id: "1",
    text: "chemise",
    image: require("../../images/categories/01.png"),
  },
  {
    id: "2",
    text: "Pants",
    image: require("../../images/categories/02.png"),
  },
  {
    id: "3",
    text: "sous-vetement",
    image: require("../../images/categories/03.png"),
  },
  {
    id: "4",
    text: "pantalon",
    image: require("../../images/categories/09.png"),
  },
  {
    id: "5",
    text: "T-shirts",
    image: require("../../images/categories/12.png"),
  },
  {
    id: "6",
    text: "pantalon",
    image: require("../../images/categories/12.png"),
  },
  {
    id: "7",
    text: "T-shirts",
    image: require("../../images/categories/pantalon1.png"),
  },
  {
    id: "8",
    text: "pantalon",
    image: require("../../images/categories/pantalon2.png"),
  },
  {
    id: "9",
    text: "T-shirts",
    image: require("../../images/categories/pantalon3.png"),
  },
];

export default function Search() {
  const [category, setCategory] = useState(0);

  function renderHeader() {
    return (
      <TopNav
        search={true}
        menu={true}
        bag={true}
        containerStyle={{
          borderBottomWidth: 1,
          borderColor: COLORS.lightBlue,
        }}
        menuOnPress={() => setShowModal(true)}
      />
    );
  }

  function renderContent() {
    return (
      <ScrollView>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <FlatList
            data={CATEGORIES}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      category == index ? COLORS.lightBlue : COLORS.transparent,
                    borderRadius: 50,
                    marginRight: 14,
                  }}
                  onPress={() => setCategory(index)}
                >
                  <Text
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 5,
                      ...FONTS.Mulish_600SemiBold,
                      fontSize: 12,
                      textTransform: "uppercase",
                      color: COLORS.black,
                    }}
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {CLOTHING_CATEGORIES.map((item, index) => {
            if (index == 0) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 1) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 2) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "100%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 3) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 4) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 5) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 6) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 7) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 8) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            if (index == 9) {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "50%",
                    height: 200,
                    borderColor: COLORS.white,
                    borderBottomWidth: 1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "rgba(23,28,49, 0.4)",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.H3,
                        color: COLORS.white,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
}
