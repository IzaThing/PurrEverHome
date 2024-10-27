import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import styles from "../../constants/styles";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { Link, router } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function LoginScreen() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  return (
    <View style={styles.loginpage}>
      <Link href="/" asChild>
        <TouchableOpacity style={{margin: 16}}>
          <TabBarIcon name="arrow-back" color="white" size={48}/>
        </TouchableOpacity>
      </Link>
      {/* TODO: Add login page content here */}
      <View style={{minHeight:"10%"}}/>
      <Image style={styles.authLogo} source={require("../../assets/images/auth_logo.png")}/>
      <View style={styles.whitebox}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.txtinput}>
          <TabBarIcon name="person" style={{flex:1}}/>
          <TextInput
          style={{paddingLeft:8, flex:9}}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
              setUser({ ...user, username: e.nativeEvent.text });
            }}
            value={user.username}
            placeholder={"Username"}
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
            secureTextEntry={true}
            autoCapitalize={"none"}
          />
        </View>
        <Text style={styles.forgtp}>Forgot Password</Text>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.logbtn}>
            <Text style={styles.txtbtn}>Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
