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

export default function RegisterScreen() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  return (
    <View style={styles.Regpage}>
      <Text style={styles.text_light}>Register Page</Text>{/*Change atong back arrow*/}
      {/* TODO Add register page content here */}
      {/*insert image login_icon*/}
      <View style={styles.whitebox}>
        <Text style={styles.heading}>Register</Text>
        <TextInput
          style={styles.txtinput}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            setUser({ ...user, username: e.nativeEvent.text });
          }}
          value={user.username}
          placeholder={"Username"}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.txtinput}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            setUser({ ...user, email: e.nativeEvent.text });
          }}
          value={user.email}
          placeholder={"Email"}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.txtinput}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            setUser({ ...user, password: e.nativeEvent.text });
          }}
          value={user.password}
          placeholder={"Password"}
          autoCapitalize={"none"}
          secureTextEntry={true}
        />
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.regbtn}>
          <Text style={styles.txtbtn}>Register</Text>
        </TouchableOpacity>
      </Link>
      </View>
    </View>
  );
}
