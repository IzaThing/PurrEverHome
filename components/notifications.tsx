import React, { useState } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";

const Notifications = () => {
    const[modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <Text>Hello werld</Text>
            </Modal>

        </View>
    )
}

export default Notifications;



