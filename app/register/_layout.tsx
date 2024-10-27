import React from "react";
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Button,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../constants/styles";
import { useState } from "react";
import { Link } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Image } from "react-native";

export default function RegisterScreen() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  return (
    <View style={styles.Regpage}>
      <Link href="/" asChild>
        <TouchableOpacity style={{ margin: 16 }}>
          <TabBarIcon name="arrow-back" color="white" size={48} />
        </TouchableOpacity>
      </Link>

      {/* TODO Add register page content here */}
      <View style={{ minHeight: "10%" }} />
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
            secureTextEntry={true}
            autoCapitalize={"none"}
          />
        </View>
        <Link href="/login" asChild>
          <TouchableOpacity style={styles.regbtn}>
            <Text style={styles.txtbtn}>Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
