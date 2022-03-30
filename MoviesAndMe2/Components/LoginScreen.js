import React, {useState} from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.headContainer}>
        <Text style={styles.welcome}>Bienvenue,</Text>
        <Text style={styles.title}>Se connecter ou s'inscrire</Text>
      </View>
      <View>
        
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.email}>Email</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text) }
          style={styles.input}
        />
        <Text style={styles.password}>Password</Text>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text) }
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>-OU-</Text>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headContainer:{
    marginTop: 70,
    marginBottom: 0,
    marginLeft: 5
  },
  welcome: {
    fontSize: 30
  },
  title: {
    color: "gray"
  },
  inputContainer:{
      width: '80%',
      marginLeft: 5
  },
  email: {
    color: "gray",
    marginTop: 20
  },
  password: {
    color: "gray",
    marginTop: 20
  },
  input:{
      marginTop: 10,
  },
  buttonContainer:{
      backgroundColor: '#0782F9',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
  },
  button:{
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: "center",

  },
  buttonOutline:{
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,

  },
  buttonText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
  buttonOutlineText:{
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
  },
  or: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  }

});
