import React, { Children, PropsWithChildren } from "react";
import { View } from "../../../components/Themed";
import styles from "../../../assets/styles/layouts/appStyles";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    footer: boolean,
    children: React.ReactNode
}

export default function AppLayout({children, footer = true}: Props) {
    return (
        <>{children}</>
        // <View style={styles.container}>
        //     <Header />
        //     {children}
        //     {footer && <Footer />}
        // </View>
    )
}