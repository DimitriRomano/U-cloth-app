import React, { useState } from "react";
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
import {
  TopNav,
  Line,
  InputField,
  Check,
  EyeOff,
  EyeOn,
  Button,
  Facebook,
  Google,
  Twitter,
  CategoryCheck,
} from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS, ANDROIDSAFEAREAVIEW } from "../constants";

export function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <TopNav
        navigation={true}
        backOnPress={() => navigation.goBack()}
        back={true}
      />
    );
  }
  function renderContent() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView style={styles.connexion}>
          <View style={styles.standardConnexion}>
            <View style={styles.headContainer}>
              <Text style={styles.welcome}>S'inscrire</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Nom et prénom</Text>
              <View style={styles.input}>
                <TextInput
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <Text style={styles.inputText}>Email</Text>
              <View style={styles.input}>
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <Text style={styles.inputText}>Mot de passe</Text>
              <View style={styles.input}>
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                />
              </View>
            </View>
            <View style={[styles.buttonContainer, styles.standardConnexionBtn]}>
              <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.standardButtonText}>INSCRIPTION</Text>
              </TouchableOpacity>
            </View>
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
    },
    title: {
      color: "gray",
    },
    inputContainer: {
      width: "80%",
      marginLeft: 10,
    },
    inputText: {
      color: "gray",
    },
    input: {
      marginTop: 10,
      borderBottomWidth: 2,
      borderBottomColor: "#DDDDDD",
      marginBottom: 20,
    },
    buttonContainer: {
      justifyContent: "center",
      alignSelf: "center",
      width: 311,
      borderRadius: 3,
    },
    button: {
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
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
      marginTop: 20,
      marginBottom: 20,
    },
    passwordForgotten: {
      textAlign: "right",
      marginTop: 48,
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
      shadowOpacity: 0.5,
      shadowRadius: 3.84,

      elevation: 5,

      padding: 10,
      marginBottom: 5,
    },

    standardConnexionBtn: {
      marginTop: 20,
      width: "100%",
      marginBottom: 20,
      backgroundColor: "#00B3EB",
    },

    networkConnexionBtn: {
      marginTop: 10,
      marginBottom: 10,
      color: "black",
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 2,
      borderColor: "grey",
      borderRadius: 5,
    },

    connexion: {
      marginTop: "5%",
    },
  });

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
}

export default RegisterScreen;
