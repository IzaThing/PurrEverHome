/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Button } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  // TODO: Update your color scheme here
  light: {
    text: "#11181C",
    background: "#6588E6",
    container: "#FFFFFF",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  cat_containers: ["#9fb9ff","#acd29f", "#ffac7e","#ffacdf"],
  reg:{
    background:"#F98D51",
    icon: "#FFF",
    Button:"#F98D51",
    View:"#fff",
    txtinput:"#000",
    regtxtbtn:"#fff",
  },
  log:{
    background:"#6588E6",
    Button:"#6588E6",
    fgtp:"#919191",
  },
  land:{
    purclr:"#000",
    tagtxt:"#F98D51",
  },
  // TODO: Add any color schemes that don't match light/dark mode here
  // ex. Blue: "#123FFF",
  // Dark mode is not used right now. Feel free to ignore
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
