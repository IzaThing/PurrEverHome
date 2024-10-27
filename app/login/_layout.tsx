import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import styles from "../../constants/styles";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  return (
    <View style={styles.loginpage}>
      <Text style={styles.text_light}>Login Page</Text>
      {/*Change atong back arrow*/}
      {/* TODO Add login page content here */}
      {/*insert image login_icon*/}
      <View style={styles.whitebox}>
        <Text style={styles.heading}>Login</Text>
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
