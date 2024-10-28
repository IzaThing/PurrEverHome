import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '@/constants/styles';

export default function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={styles.nocontent} source={require("../../assets/images/no_content.png")}/>
      <Text style={{fontSize: 15, textAlign: 'center', width: '100%'}}>Nothing yet!</Text>
    </View>
  );
}
