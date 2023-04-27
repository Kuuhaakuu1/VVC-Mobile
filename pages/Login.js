import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleCreateAccount = () => {
      navigation.navigate('SignUp');
    };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Logo.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={handleCreateAccount }>Create an account</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#212832",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 5,
      width: 400,
      height: 400,
    },
    inputView: {
      backgroundColor: "#D3B419",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 20,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#D3B419",
    },
    loginText: {
      color: "white",
    },
  });
export default Login;