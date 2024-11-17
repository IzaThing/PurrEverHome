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
    birthday: "4 Years",
    image: require("../../assets/images/cat1.png"),
  },
  {
    id: 2,
    name: "Princess",
    location: "Camaman-an",
    birthday: "1 Year",
    image: require("../../assets/images/cat2.png"),
  },
  {
    id: 3,
    name: "Zoey",
    location: "Bugo ",
    birthday: "3 Months",
    image: require("../../assets/images/cat3.png"),
  },
  {
    id: 4,
    name: "Muffin",
    location: "Tablon",
    birthday: "2 Years",
    image: require("../../assets/images/cat4.png"),
  },
  {
    id: 5,
    name: "Squid",
    location: "Puerto",
    birthday: "1 Year",
    image: require("../../assets/images/cat5.png"),
  },
  {
    id: 6,
    name: "Suzie",
    location: "Bugo ",
    birthday: "4 Years",
    image: require("../../assets/images/cat6.png"),
  },
  {
    id: 7,
    name: "Kokot",
    location: "Bulua",
    birthday: "2 Years",
    image: require("../../assets/images/cat7.png"),
  },
  {
    id: 8,
    name: "Schumi",
    location: "Gusa",
    birthday: "3 Months",
    image: require("../../assets/images/cat8.png"),
  },
];

const categories = ["All", "Kittens", "Seniors", "Rescues"];



export default function HomeScreen() {

  const [pressed, setPressed] = useState(0);
  
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
      </View>
    </View>
  );
}
