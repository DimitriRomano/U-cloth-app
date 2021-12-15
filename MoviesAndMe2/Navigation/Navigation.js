import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";
import Favorites from "../Components/Favorites";
import Test from "../Components/Test";
import LoginScreen from "../Components/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Searchs"
        component={Search}
        options={{ title: "Rechercher" }}
      />
      <Stack.Screen name="FilmDetail" component={FilmDetail} />
    </Stack.Navigator>
  );
}

function FavoriteStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorites}
        options={{ title: "Favoris" }}
      />
      <Stack.Screen name="FilmDetail" component={FilmDetail} />
    </Stack.Navigator>
  );
}

function LoginStackNavigator() {
  return (
  <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title:"Login"}}
        ></Stack.Screen>
      <Stack.Screen name="Log" component={LoginScreen} />
  </Stack.Navigator>
  );
}

export default function MoviesTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "#DDDDDD",
          tabBarInactiveBackgroundColor: "#FFFFFF",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Search"
          component={SearchStackNavigator}
          options={{
            // On définit le rendu de nos icônes par les images récemment ajoutés au projet
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../Images/ic_search.png")}
                  // On applique un style pour les redimensionner comme il faut
                  style={styles.icon}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoriteStackNavigator}
          options={{
            headerShown: false,
            // On définit le rendu de nos icônes par les images récemment ajoutés au projet
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../Images/ic_favorite.png")}
                  // On applique un style pour les redimensionner comme il faut
                  style={styles.icon}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
