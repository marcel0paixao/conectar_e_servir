import React from "react";
import { View } from "../../../components/Themed";
import styles from "../../../assets/styles/layouts/chatStyles";
import { Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Text style={styles.iconBack}>&#60;</Text>
            </TouchableOpacity> */}
            
            <Image style={styles.headerLogo} source={require('../../../assets/images/person.webp')} />
            <Text style={styles.name}>Ana da Silva</Text>
        </View>
    );
}