import React, { useCallback, useState } from "react";
import {View, Text, Image, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData, Alert,} from "react-native";
import styles from "../../constants/styles";
import { TextInput } from "react-native-gesture-handler";
import { Link, useFocusEffect, router } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

export default function LoginScreen() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setUser({ email: "", password: "" });
    }, [])
  );

  const handleLogin = async () => {
    try {
      // Sign in the user using the auth instance and credentials
      await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("User signed in successfully!");

      // Redirect to the home screen after successful login
      router.push("/home");
    } catch (error) {
      // Handle authentication errors
      if (error instanceof Error) {
        Alert.alert("Authentication Error", "Invalid email or password.");
      } else {
        console.error("Unknown error during authentication:", error);
      }
    }
  };


  return (
    <View style={styles.loginpage}>
      <Link href="/" asChild>
        <TouchableOpacity style={{margin: 16}}>
          <TabBarIcon name="arrow-back" color="white" size={48}/>
        </TouchableOpacity>
      </Link>
      <View style={{minHeight:"5%"}}/> 
      <Image style={styles.authLogo} source={require("../../assets/images/auth_logo.png")}/>
      <View style={styles.whitebox}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.txtinput}>
          <TabBarIcon name="mail" style={{flex:1}}/>
          <TextInput
            style={{paddingLeft:8, flex:9}}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
              setUser({ ...user, email: e.nativeEvent.text });
            }}
            value={user.email}
            placeholder={"Email"}
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.txtinput}>
          <TabBarIcon name="lock-closed" style={{flex:1}}/>
          <TextInput
            style={{paddingLeft:8, flex:9}}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
              setUser({ ...user, password: e.nativeEvent.text });
            }}
            value={user.password}
            placeholder={"Password"}
            secureTextEntry={!visible}
            autoCapitalize={"none"}
          />
          <TouchableOpacity onPress={()=>setVisible(!visible)} style={{flex:1, alignSelf: "center"}}>
              <TabBarIcon name={visible ? "eye-off-outline" : "eye-outline"} size={20}/>
          </TouchableOpacity>
          
        </View>
        <Text style={styles.forgtp}>Forgot Password?</Text>
        <TouchableOpacity onPress={handleLogin} style={styles.logbtn}>
          <Text style={styles.txtbtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
