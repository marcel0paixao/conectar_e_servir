import React, {useState} from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox';
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";

export default function SingUp(){
    const [privacyTerms, setPrivacyTerms] = React.useState(false);
    const [useTerms, setUseTerms] = React.useState(false);
    const navigation = useNavigation<StackTypes>();

    return (
        <AppLayout>
          <View>
            <Text style={styles.title}>Cadastrar-se</Text>
          </View>

          <View>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu E-mail"
              placeholderTextColor={'white'} />
          </View>

          <View>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
              placeholderTextColor={'white'} />
          </View>

          <View>
            <Text style={styles.inputLabel}>Confirmação de senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha"
              placeholderTextColor={'white'} />
          </View>

          <View>
            <Text style={styles.inputLabel}>CPF</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Insira seu CPF"
              placeholderTextColor={'white'} />
          </View>

          <View>
            <Text style={styles.inputLabel}>Data de nascimento</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira sua data de nascimento"
              placeholderTextColor={'white'} />
          </View>

          <View style={styles.registerViewCheckbox}>
            <CheckBox
              style={styles.checkboxInput}
              disabled={false}
              value={useTerms}
              onValueChange={() => setUseTerms(!useTerms)}
            />
            <Text style={styles.checkboxLabel}>Concordo com os termos de uso</Text>
          </View>

          <View style={styles.registerViewCheckbox}>
            <CheckBox
              style={styles.checkboxInput}
              disabled={false}
              value={privacyTerms}
              onValueChange={() => setPrivacyTerms(!privacyTerms)}
            />
            <Text style={styles.checkboxLabel}>Concordo com os termos de privacidade</Text>
          </View>

          <TouchableOpacity style={{ ...styles.button, marginVertical: 20 }} onPress={() => navigation.navigate('ConfirmEmail')}>
            <Text style={globalStyles.buttonText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </AppLayout>
    );
}