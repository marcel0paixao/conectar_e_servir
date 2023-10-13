import React from "react";
import { Pressable, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import globalStyles from "../../../assets/styles/globalStyles";
import { useNavigation } from "expo-router";
import { LogBox } from 'react-native';
import { StackTypes } from "../../routes/stack.routes";
import AppLayout from "../../layouts/AppLayout/index";
LogBox.ignoreLogs(['Sending...']);

export default function Welcome() {
  const navigation = useNavigation<StackTypes>();

  return (
    <AppLayout>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title}>Bem-vindo ao Conectar e servir</Text>
          <Text style={globalStyles.subTitle}>Sua plataforma para servir a comunidade</Text>
        </View>
        <View>
          <Pressable>
            {({ pressed }) => {
              return (
                <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Login')}>
                  <Text style={globalStyles.buttonText}>Entrar</Text>
                </TouchableOpacity>
              )
            }}
          </Pressable>
        </View>
      </View>
    </AppLayout>
  );
}

