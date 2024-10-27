import React from "react";
import { View, Text, ImageSourcePropType } from "react-native";
import styles from "@/constants/styles";
import CatContainer from "@/components/CatContainer";
import { ScrollView } from "react-native-gesture-handler";

interface cat {
  id: number;
  name: String;
  location: String;
  birthday: String;
  image: ImageSourcePropType;
}

const cats = [
  {
    id: 1,
    name: "Maki",
    location: "Camaman-an",
    birthday: "Still a baby",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    id: 2,
    name: "Kokot",
    location: "Camaman-an",
    birthday: "Still a baby",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    id: 3,
    name: "Makikoy",
    location: "Camaman-an",
    birthday: "Still a baby",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    id: 4,
    name: "Kokooy",
    location: "Camaman-an",
    birthday: "Still a baby",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    id: 5,
    name: "Maki",
    location: "Camaman-an",
    birthday: "Still a baby",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    id: 6,
    name: "Kokot",
    location: "Camaman-an",
    birthday: "Still a baby",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    id: 7,
    name: "Makikoy",
    location: "Camaman-an",
    birthday: "Still a baby",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    id: 8,
    name: "Kokooy",
    location: "Camaman-an",
    birthday: "Still a baby",
    image: require("../../assets/images/react-logo.png"),
  },
];
export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.home_container}>
        <Text style={styles.text_light}>Homepage</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {cats.map((cat: cat) => (
              <CatContainer key={cat.id} cat={cat} />
            ))}
          </View>
        </ScrollView>
        {/* TODO: Add landing page content */}
      </View>
    </View>
  );
}
