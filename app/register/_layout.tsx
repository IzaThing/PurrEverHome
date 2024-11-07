import React from "react";
import {View, Text, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Image, Alert} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../constants/styles";
import { useState } from "react";
import { Link, router, useFocusEffect } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { auth } from "../../FirebaseConfig"; // Import the auth instance
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the correct method from Firebase Web SDK

export default function RegisterScreen() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setUser({ email: '', password: '', username: '' });
    }, [])
  );

  const handleRegister = async () => {
    try {
      // Call the Firebase Web SDK method to create a new user
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      Alert.alert("Registration Successful!");
      router.push({ pathname: "/home", params: { username: user.username } });
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Registration Error", error.message);
      } else {
        console.error("Unknown registration error:", error);
      }
    }
  };
  
  return (
    <View style={styles.Regpage}>
      <Link href="/" asChild>
        <TouchableOpacity style={{ margin: 16 }}>
          <TabBarIcon name="arrow-back" color="white" size={48} />
        </TouchableOpacity>
      </Link>

      {/* TODO Add register page content here */}
      <View style={{ minHeight: "5%" }} />
      <Image
        style={styles.authLogo}
        source={require("../../assets/images/auth_logo.png")}
      />
      <View style={styles.whitebox}>
        <Text style={styles.heading}>Register</Text>
        <View style={styles.txtinput}>
          <TabBarIcon name="person" style={{flex:1}}/>
          <TextInput
          style={{paddingLeft:8, flex: 9}}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
              setUser({ ...user, username: e.nativeEvent.text });
            }}
            value={user.username}
            placeholder={"Username"}
            autoCapitalize={"none"}
          />
        </View>

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

          <TouchableOpacity onPress={handleRegister} style={styles.regbtn}>
            <Text style={styles.txtbtn}>Register</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
