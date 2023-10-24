import React, { useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";

export default function ForgotPassword(){
    const navigation = useNavigation<StackTypes>();
    const [codeConfirmationForm, setCodeConfirmationForm] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    
    return (
        <AppLayout>
            <View style={styles.confirmEmailContainer}>
                {!codeConfirmationForm ? (
                    <View>
                        <View style={styles.confirmEmailTextsContainer}>
                            <Text style={styles.title}>Digite seu email</Text>
                            <Text style={{...styles.subTitle, marginBottom: 20}}>Insira seu e-mail abaixo, enviaremos um código de confirmação de 6 dígitos para a recuperação de senha.</Text>
                        </View>
                        <View>
                            <TextInput 
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                                style={styles.input}
                                placeholder="Digite seu e-mail"
                                placeholderTextColor={"#fff"} />
                        </View>
                        <View>
                            <TouchableOpacity style={{ ...styles.button, marginTop: 30 }} onPress={() => setCodeConfirmationForm(true)}>
                                <Text style={globalStyles.buttonText}>Enviar código</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View>
                        <View style={styles.confirmEmailTextsContainer}>
                            <Text style={styles.title}>Confirme o código</Text>
                            <Text style={styles.subTitle}>Enviamos um código de 6 dígitos para o email</Text>
                            <Text style={{...styles.subTitle, fontWeight: '600'}}>{email}</Text>
                            <Text style={styles.subTitle}>Por segurança não compartilhe esse código com ninguém. Confirme-o abaixo para poder definir uma nova senha:</Text>
                        </View>
                        <View>
                            <View style={styles.confirmationEmailInputContainer}>
                                <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                                <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                                <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                                <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                                <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                                <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ ...styles.button }} onPress={() => navigation.navigate('DefinePassword')}>
                                <Text style={globalStyles.buttonText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.confirmEmailTextsContainer}>
                            <Text style={{...styles.subTitle, marginBottom: 20, textAlign: 'center'}}>Deseja informar outro email? <Text onPress={() => setCodeConfirmationForm(false)} style={{fontWeight: 600}}>Clique aqui</Text></Text>
                        </View>
                    </View>
                )}
            </View>
        </AppLayout>
    )
}