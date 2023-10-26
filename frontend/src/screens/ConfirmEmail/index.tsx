import React, { useRef, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";

export default function ConfirmEmail(){
    const navigation = useNavigation<StackTypes>();
    const [numbers, setNumbers] = useState<Array<number | null>>([null, null, null, null, null, null]);
    
    return (
        <AppLayout>
            <View style={styles.confirmEmailContainer}>
                <View style={styles.confirmEmailTextsContainer}>
                    <Text style={styles.title}>Confirme o código</Text>
                    <Text style={styles.subTitle}>Enviamos um código de 6 dígitos por email, por segurança não compartilhe esse código com ninguém. Confirme-o abaixo:</Text>
                </View>
                <View>
                    <View style={styles.confirmationEmailInputContainer}>
                        <TextInput style={styles.confirmationEmailInput} keyboardType="numeric" maxLength={1} onChangeText={text => setNumbers(numbers => numbers.map((number, index) => {
                            if(text && index == 0) {
                                number = Number(text);
                            }
                            return number;
                        }))}/>
                        <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                        <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                        <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                        <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                        <TextInput style={styles.confirmationEmailInput} maxLength={1} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{ ...styles.button }} onPress={() => navigation.navigate('Home')}>
                        <Text style={globalStyles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AppLayout>
    )
}