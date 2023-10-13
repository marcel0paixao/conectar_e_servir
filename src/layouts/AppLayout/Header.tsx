import React from "react";
import { View } from "../../../components/Themed";
import styles from "../../../assets/styles/layouts/appStyles";
import { Image } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.headerLogo} source={require('../../../assets/images/logo.png')} />
        </View>
    );
}