import React, { useState } from "react";
import { View, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
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

const categories = ["All", "Kittens", "Seniors", "Rescues"];



export default function HomeScreen() {

  const [pressed, setPressed] = useState<number | null>(null);
  
  return (
    <View style={styles.page}>
      <View style={styles.home_container}>
        <View style={styles.categ_container}>
            {categories.map((category, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={[styles.categ_button, { backgroundColor: pressed === index ? "black" : "#FFF7DF" }]} 
                    onPress={()=>setPressed(index)}
                    >
                    <Text style={[styles.categ_text, { color: pressed === index ? "#FFF7DF" : "black"}]}>{category}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent:"center" }}>
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
