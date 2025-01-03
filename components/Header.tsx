import * as React from "react";
import { View, Text } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useState } from "react";
import Notifications from "./Notifications";

export default function Header() {
  const navigation = useNavigation();
  const user = {
    username: "USERNAME",
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View
      style={{
        height: 112,
        backgroundColor: "#6588E6",
      }}
    >
      {/* Divides header into 3 sections */}
      <View
        style={{
          flexDirection: "row",
          paddingTop: 20,
          gap: 16,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {/* First Container - Drawer Button */}
        <View style={{ flex: 1 }}>
          <TabBarIcon
            style={{
              paddingLeft: 16,
            }}
            size={32}
            name={"menu"}
            color="#FFFFFF"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </View>

        {/* Second Container - Location Display */}
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TabBarIcon
            name={"location"}
            color="#FFFFFF"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: "Inter_600SemiBold" }}>
            Cagayan de Oro City
          </Text>
        </View>

        {/* Third Container - Notifications Button */}
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            paddingRight: 16,
          }}
        >
          <TabBarIcon
            name={"notifications"}
            color="#FFFFFF"
            onPress={openModal}
          />
        </View>
      </View>
      
      {/* Render Notifications Modal */}
      <Notifications isVisible={modalVisible} onClose={closeModal} />

      <Text
        style={{
          paddingLeft: 16,
          paddingTop: 30,
          color: "#FFFFFF",
          fontSize: 24,
          fontFamily: "Inter_800ExtraBold",
        }}
      >
        Hello {user.username}!
      </Text>
    </View>
  );
}
