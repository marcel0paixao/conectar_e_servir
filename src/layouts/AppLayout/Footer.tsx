import React from "react";
import { View } from "../../../components/Themed";
import { Image } from "react-native";
import styles from "../../../assets/styles/layouts/appStyles";

export default function AppLayout() {
    return (
        <View style={styles.footer}>
            <Image style={styles.logoFooter} source={require('../../../assets/images/logo_footer.png')} />
        </View>
    )
}