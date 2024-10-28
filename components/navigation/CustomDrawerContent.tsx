import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Link, router } from "expo-router";
import styles from "@/constants/styles";
import { TabBarIcon } from "./TabBarIcon";

// Custom Drawer Content Component
function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20, alignItems: "flex-start" }}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{ width: 120, height: 120, borderRadius: 40, marginBottom: 5, marginTop: 30 }}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop:10, width: 140 }}>USERNAME</Text>
        <Text style={{ fontSize: 12, width: 200, color: "#747474" }}>username123@gmail.com</Text>
      </View>
      <View style={{ height: 1, width: 200, backgroundColor: '#BABABA', marginLeft: 30, marginBottom: 10 }} />
      <DrawerItemList {...props} />

       {/* Log Out button at the bottom */}
       <Link href="/" asChild>
          <TouchableOpacity style={styles.logout}>
            <TabBarIcon name="log-out-outline" color="#FD7C34" size={30} />
            <Text style={{fontSize: 20, padding: 10, color: "#FD7C34"}}>Logout</Text>
          </TouchableOpacity>
      </Link>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
