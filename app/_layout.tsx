import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";
import Header from "@/components/Header";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import CustomDrawerContent from "@/components/navigation/CustomDrawerContent";

import { 
  Inter_500Medium, 
  Inter_600SemiBold, 
  Inter_800ExtraBold, 
  useFonts 
} from '@expo-google-fonts/inter';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;  
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Drawer
        screenOptions={{
          headerShown: true,
          headerTitleStyle: {
            fontFamily: "Inter_800ExtraBold",
          }, 
          header: () => <Header />,
          drawerStyle: {
            borderRadius: 25,
            marginLeft: -20,
            paddingLeft: 20,
          },
          overlayColor: 'rgba(101, 136, 230, 0.7)'
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
            title: "Landing Page",
          }}
          name="index"
        />
        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
            title: "Login",
          }}
          name="login"
        />
        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
            title: "Register",
          }}
          name="register"
        />
        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            title: "Not Found",
          }}
          name="+not-found"
        />
      

        <Drawer.Screen
          options={{
            headerShown: true,
            title: "Home",
            drawerIcon: ({ focused }) => (
              <TabBarIcon name={focused ? "home" : "home-outline"} color={focused ? '#007AFF' : '#333'} size={24} />
            ),
          }}
          name="home"
        />

        <Drawer.Screen
          options={{
            headerShown: true,
            title: "Search",
            drawerIcon: ({ focused }) => (
              <TabBarIcon name={focused ? "search" : "search-outline"} color={focused ? '#007AFF' : '#333'} size={24} />
            ),
          }}
          name="search"
        />

        <Drawer.Screen
          options={{
            headerShown: true,
            title: "Favorites",
            drawerIcon: ({ focused }) => (
              <TabBarIcon name={focused ? "heart" : "heart-outline"} color={focused ? '#007AFF' : '#333'} size={24} />
            ),
          }}
          name="favorites"
        />

        <Drawer.Screen
          options={{
            headerShown: true,
            title: "View Profile",
            drawerIcon: ({ focused }) => (
              <TabBarIcon name={focused ? "person" : "person-outline"} color={focused ? '#007AFF' : '#333'} size={24} />
            ),
          }}
          name="view-profile"
        />

        <Drawer.Screen
          options={{
            headerShown: true,
            title: "Applications",
            drawerIcon: ({ focused }) => (
              <TabBarIcon name={focused ? "mail" : "mail-outline"} color={focused ? '#007AFF' : '#333'} size={24} />
            ),
          }}
          name="applications"
        />

        <Drawer.Screen
          options={{
            headerShown: true,
            title: "Settings",
            drawerIcon: ({ focused }) => (
              <TabBarIcon name={focused ? "settings" : "settings-outline"} color={focused ? '#007AFF' : '#333'} size={24} />
            ),
          }}
          name="settings"
        />

        
      </Drawer>

      
    </GestureHandlerRootView>
  );
}
