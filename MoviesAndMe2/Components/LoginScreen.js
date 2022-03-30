import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView style={styles.connexion}>
        <View style={styles.standardConnexion}>
          <View style={styles.headContainer}>
            <Text style={styles.welcome}>Bienvenue,</Text>
            <Text style={styles.title}>Se connecter ou s'inscrire</Text>
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
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.standardButtonText}>SE CONNECTER</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.or}>-OU-</Text>
        <View style={[styles.buttonContainer, styles.networkConnexionBtn]}>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Image style={styles.iconBtn} source={require("../assets/facebook.png")}></Image>
            <Text style={styles.networkButtonText}>
              Se connecter avec Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonContainer, styles.networkConnexionBtn]}>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Image style={styles.iconBtn} source={require("../assets/google.png")}></Image>
            <Text style={styles.networkButtonText}>
              Se connecter avec Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    fontFamily: "SFProDisplayBold"
  },
  title: {
    color: "gray",
    fontFamily: "SFProDisplayBold"
  },
  underline: {
    borderBottomWidth: 2,
    borderBottomColor: "#DDDDDD",
  },
  inputContainer: {
    width: "80%",
    marginLeft: 10,
  },
  email: {
    color: "gray",
    marginTop: 20,
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
    width: 311,
    borderRadius: 3,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
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
  },

  standardConnexionBtn: {
    marginTop: 20,
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
    borderColor: "#DDDDDD",
    borderRadius: 5,
    width: 344,
  },

  connexion: {
    width: 344,
    alignSelf: "center",
    marginTop: 50,
  },

  iconBtn: {
    width: 20,
    height: 20,
    marginRight: 10
  }
});