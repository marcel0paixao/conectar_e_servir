import React, { Children, PropsWithChildren } from "react";
import { View } from "../../../components/Themed";
import styles from "../../../assets/styles/layouts/appStyles";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout({children}: PropsWithChildren) {
    return (
        <View style={styles.container}>
            <Header />
            {children}
            <Footer />
        </View>
    )
}