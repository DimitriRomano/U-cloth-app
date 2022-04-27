import React, { useState } from "react";
import facebookIcon from "../images/icons/facebook.png";
import googleIcon from "../images/icons/google.png";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS, ANDROIDSAFEAREAVIEW } from "../constants";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // const [passVissible, setPassVissible] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);

  // function renderHeader() {
  //   return (
  //     <TopNav
  //       navigation={true}
  //       backOnPress={() => navigation.goBack()}
  //       back={true}
  //     />
  //   );
  // }

  function renderContent() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView style={styles.connexion}>
          <View style={styles.standardConnexion}>
            <View style={styles.headContainer}>
              <Text style={styles.welcome}>Bienvenue,</Text>
              <Text
                style={styles.title}
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                S'inscrire, par ici.
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.email}>Email</Text>
              <View style={styles.underline}>
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                />
              </View>
              <Text style={styles.password}>Mot de passe</Text>
              <View style={styles.underline}>
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
              </View>
            </View>

            <Text style={styles.passwordForgotten}>Mot de passe oublié</Text>

            <View style={[styles.buttonContainer, styles.standardConnexionBtn]}>
              <TouchableOpacity
                onPress={() => navigation.navigate("MainLayout")}
                style={styles.button}
              >
                <Text style={styles.standardButtonText}>SE CONNECTER</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.or}>-OU-</Text>
          <View style={[styles.buttonContainer, styles.networkConnexionBtn]}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Image style={styles.iconBtn} source={facebookIcon}></Image>
              <Text style={styles.networkButtonText}>
                Se connecter avec Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.buttonContainer, styles.networkConnexionBtn]}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Image style={styles.iconBtn} source={googleIcon}></Image>
              <Text style={styles.networkButtonText}>
                Se connecter avec Google
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headContainer: {
      marginTop: 10,
      marginBottom: 48,
      marginLeft: 5,
    },
    welcome: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 10,
      fontFamily: "SFProDisplayBold",
    },
    title: {
      color: "#06B3EB",
      fontFamily: "SFProDisplayBold",
    },
    underline: {
      borderBottomWidth: 2,
      borderBottomColor: "#DDDDDD",
    },
    inputContainer: {
      width: "100%",
    },
    email: {
      color: "gray",
    },
    password: {
      color: "gray",
      marginTop: 20,
    },
    input: {
      marginTop: 10,
      borderBottomColor: "grey",
    },
    buttonContainer: {
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: 3,
    },
    button: {
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    standardButtonText: {
      color: "white",
      fontSize: 14,
    },
    networkButtonText: {
      color: "black",
      fontSize: 14,
    },
    or: {
      alignSelf: "center",
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
    },
    passwordForgotten: {
      textAlign: "right",
      marginTop: 10,
      marginRight: 10,
    },

    standardConnexion: {
      backgroundColor: "white",
      width: "80%",
      alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,

      elevation: 5,

      padding: 10,
    },

    standardConnexionBtn: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: "#00B3EB",
      width: "100%",
    },

    networkConnexionBtn: {
      marginTop: 10,
      marginBottom: 10,
      color: "black",
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 2,
      borderColor: "#DDDDDD",
      borderRadius: 5,
      width: 344,
    },

    connexion: {
      marginTop: 40,
    },

    iconBtn: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
  });

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {/* {renderHeader()} */}
      {renderContent()}
    </SafeAreaView>
  );
}

export default LoginForm;
