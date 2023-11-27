import React from "react";
import Routes from "../src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../contexts/auth";
import { SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer independent={true}>
                <AuthProvider children={<Routes />} />
            </NavigationContainer>
        </SafeAreaView>
    )
} 