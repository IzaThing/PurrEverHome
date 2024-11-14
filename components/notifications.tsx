import React from "react";
import { View, Modal, TouchableOpacity, Text, Image } from "react-native";
import styles from "@/constants/styles";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

// const notifs = [
//     {
//         id: 1,
//         title: "Approved",
//         description: "Your application for Chonk 2 has been approved!",
//         time: "Just Now",
//     },
//     {
//         id: 2,
//         title: "Take the Next Step!",
//         description: "Chonk 2 is still waiting! Visit your favorites to adopt.",
//         time: "3 days ago",
//     },
// ]

const Notifications: React.FC<Props> = ({ isVisible, onClose }) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
    >

        <TouchableOpacity 
            style={styles.notifsbackground}
            activeOpacity={1}
            onPress={onClose}    
        >
            <View style={styles.notifsmodal}>
                <Text style={styles.notifstext}>Notifications</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image style={styles.nocontent} source={require("./../assets/images/no_content.png")}/>
                    <Text style={{fontSize: 18, alignSelf: 'center', textAlign: 'center', width: 200, marginTop: 20, color: 'grey'}}>You don’t have any notifications right now.</Text>
                </ScrollView>
            </View>
        </TouchableOpacity>
    </Modal>
  );
};

export default Notifications;
