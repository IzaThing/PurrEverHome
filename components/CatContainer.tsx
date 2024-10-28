import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
interface props {
  cat: {
    name: String;
    location: String;
    birthday: String;
    image: ImageSourcePropType;
  };
}

export default function CatContainer(props: props) {
  const color =
    Colors.cat_containers[
      Math.floor(Math.random() * Colors.cat_containers.length)
    ];

  const [liked, setLiked] = useState(false);
  return (
    <View
      style={{
        backgroundColor: color,
        justifyContent: "center",
        flexDirection: "column",
        padding: 10, //changed
        borderRadius: 16,
        margin: 8,
        elevation: 4
      }}
    >
      <Image
        style={{
          width: 130,
          height: 130,
          backgroundColor: "black",
          borderRadius: 16,
        }}
        source={props.cat.image}
      />
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text style={{ flex: 9, fontWeight: "bold" }}>{props.cat.name}</Text>
        <TouchableOpacity onPress={()=>setLiked(!liked)}>
          <TabBarIcon
            name="heart"
            size={24}
            color={liked ? "black" : "white"}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <TabBarIcon name="home" size={16} />
        <Text style={{ fontSize: 12 }}>{props.cat.location}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <TabBarIcon name="calendar" size={16} />
        <Text style={{ fontSize: 12 }}>{props.cat.birthday}</Text>
      </View>
    </View>
  );
}
