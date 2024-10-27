import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";
import Header from "@/components/Header";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Drawer
        screenOptions={{
          headerShown: true,
          header: () => <Header />,
        }}
      >
        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            title: "Landing Page",
          }}
          name="index"
        />
        <Drawer.Screen
          options={{
            // TODO: Hide this on actual release. Uncomment line below to hide
            // drawerItemStyle: { display: "none" },
            headerShown: false,
            title: "Login",
          }}
          name="login"
        />
        <Drawer.Screen
          options={{
            // TODO: Hide this on actual release. Uncomment line below to hide
            // drawerItemStyle: { display: "none" },
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
      </Drawer>
    </GestureHandlerRootView>
  );
}
