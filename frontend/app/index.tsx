import React from "react";
import Routes from "../src/routes";
import { Text } from "react-native";
import AuthContext from "../contexts/auth";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../contexts/auth";

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <AuthProvider children={<Routes />} />
        </NavigationContainer>
    )
} 