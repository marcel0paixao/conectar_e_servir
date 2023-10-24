import React, {useState} from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";

export default function DefinePassword(){
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordChanged, setPasswordChanged] = useState<boolean>(false);
    const navigation = useNavigation<StackTypes>();

    return (
        <AppLayout>
          {!passwordChanged ?
            <View style={{marginVertical: 100}}>
              <View>
                <Text style={styles.title}>Definir nova senha</Text>
              </View>

              <View>
                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  keyboardType="visible-password"
                  placeholder="Insira a nova senha"
                  placeholderTextColor={'white'} />
              </View>

              <View>
                <Text style={styles.inputLabel}>Confirmação de senha</Text>
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  style={styles.input}
                  placeholder="Insira a nova senha"
                  placeholderTextColor={'white'} />
              </View>

              <TouchableOpacity style={{ ...styles.button, marginTop: 40 }} onPress={() => setPasswordChanged(true)}>
                <Text style={globalStyles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
            </View> :
            <View style={{marginVertical: 150}}>
              <View style={{alignItems: 'center', marginBottom: 20}}>
                <Text style={styles.title}>Sucesso!</Text>
                <Text style={styles.subTitle}>Você mudou sua senha, volte e faça login.</Text>
              </View>
              <View>
                <TouchableOpacity style={{ ...styles.button }} onPress={() => navigation.navigate('Login')}>
                    <Text style={globalStyles.buttonText}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        </AppLayout>
    );
}