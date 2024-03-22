import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Appbar, TextInput,Button } from "react-native-paper";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; 


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Please fill in all fields");
        return;
      }
  
      const response = await axios.post("http://10.10.29.38:5000/api/users/login",{ email, password });
  
      if (response.status === 200) {
        const token = response.data.token;
  
        // Store token in AsyncStorage
        await AsyncStorage.setItem("token", token);

        
  
        navigation.navigate("Home",{email:email});
        // Display login success message
        Alert.alert(
          "Success",
          "Login successfully",
        );

        
      } else {
        const data = await response.json();
        Alert.alert("Error", data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error during login:", error);
      Alert.alert("Error", "Something went wrong");
    }
  };
  

  const handleForgotPassword = () => {
    console.log("Forgot Password");
    navigation.navigate("Forgot");
  };

  const handleSignUp = () => {
    navigation.navigate("Register");
  };

  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setPassword("");
    }, [])
  );

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#007BFF" />
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction
            onPress={() => navigation.goBack()}
            color="white"
          />
        </Appbar.Header>

        <View style={styles.textSection}>
          <Text style={styles.welcomeText}>Welcome </Text>
          <Text style={styles.signInText}>Sign in to continue</Text>
        </View>

        <View style={styles.field}>
          <View style={{marginBottom:responsiveHeight(2) }}>
          <TextInput
            label="email"
            mode="outlined"
            outlineColor="#d9d7d2"
            activeOutlineColor="#007BFF"
            width={responsiveWidth(85)}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          </View>
          
          <View>
          <TextInput
            label="password"
            mode="outlined"
            outlineColor="#d9d7d2"
            activeOutlineColor="#007BFF"
            width={responsiveWidth(85)}
            secureTextEntry         
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          </View>
          
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
          LOGIN
          </Button>

          <View>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={[styles.signupText, styles.signupLink]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#007BFF",

    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  button: {
 marginTop: responsiveHeight(5),
    backgroundColor: "#007BFF",
    width: 337,
    padding: 2,

  },
  welcomeText: {
    fontSize: responsiveFontSize(5),
    fontWeight: "bold",
    top: responsiveHeight(0.1),
  },
  signInText: {
    fontSize: responsiveFontSize(2),
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textSection: {
    marginLeft: responsiveWidth(5),
  },
 

  field: {
    width: responsiveWidth(100),
    top: responsiveHeight(5),
  alignItems: "center",
   
  },
  forgotPasswordText: {
    color: "#007BFF",
    fontSize: responsiveFontSize(2),
    textDecorationLine: "none",
    textAlign: "right",
    top: responsiveHeight(3),
  },
  signupTextContainer: {
    flexDirection: "row",
    marginLeft: responsiveWidth(6),
    top: responsiveHeight(15),
  },
  signupText: {
    color: "#000",
    fontSize: responsiveFontSize(2),
  },
  signupLink: {
    color: "#007BFF",
    marginLeft: responsiveFontSize(0.5),
    textDecorationLine: "none",
  },
});
