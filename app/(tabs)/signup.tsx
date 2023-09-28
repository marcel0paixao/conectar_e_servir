import React, {useState} from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox'

export default function Form(){

    // Variáveis e métodos para CheckBox
    const [checadaSuperior, setChecadaSuperior] = React.useState(false);
    const [checadaInferior, setChecadaInferior] = React.useState(false);

    return (
        <View>
            <View>
                <Text style={styles.textoprimeiro}>E-mail</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Insira seu E-mail"
                  placeholderTextColor="white" />

                <Text style={styles.texto}>Senha</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Insira sua senha"
                  placeholderTextColor="white" />

                <Text style={styles.texto}>Confirmação de senha</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Confirme sua senha"
                  placeholderTextColor="white" />

                <Text style={styles.texto}>CPF</Text>

                <TextInput
                  style={styles.input}
                  keyboardType="number-pad"
                  placeholder="Insira seu CPF"
                  placeholderTextColor="white" />
                <Text style={styles.texto}>Data de nascimento</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Insira sua data de nascimento"
                  placeholderTextColor="white"
                ></TextInput>
                
                <View style={styles.viewCheckBox}>
                <CheckBox
                  style={styles.CheckBoxSuperior}
                  disabled={false}
                  value={checadaSuperior}
                  onValueChange={() => setChecadaSuperior(!checadaSuperior)}
                />
                <Text style={styles.viewCheckBoxTextoSuperior}
                  >Concordo com os termos de uso</Text>
                </View>

                <View style={styles.viewCheckBox}>
                  <CheckBox
                    style={styles.CheckBoxInferior}
                    disabled={false}
                    value={checadaInferior}
                    onValueChange={() => setChecadaInferior(!checadaInferior)}
                  />

                  <Text style={styles.viewCheckBoxTextoInferior}>Concordo com os termos de privacidade</Text>
                </View>

                <TouchableOpacity style={styles.Button}>
                  <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
                  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        paddingTop: 13,
        paddingBottom: 5,
        paddingHorizontal: 10,
        paddingLeft: 30
    },

    textoprimeiro: {
      paddingTop: 50,
      paddingBottom: 5,
      paddingHorizontal: 10,
      paddingLeft: 30
  },

    input: {
        width: 330,
        height: 50,

        backgroundColor: 'rgb(34, 34, 34)',

        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',

        paddingLeft: 15
    },

    viewCheckBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 25
    },
    viewCheckBoxTextoSuperior: {
        paddingTop: 10
    },
    viewCheckBoxTextoInferior: {
        paddingBottom: 10
    },
    CheckBoxSuperior: {
        margin: 10,
        marginTop: 15,
        marginBottom: 5
    },
    CheckBoxInferior: {
        margin: 10,
        marginTop: 5,
        marginBottom: 15
    },

    Button: {
      backgroundColor: 'rgb(34, 34, 34)',
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 10,
      marginLeft: 30,
      marginRight: 30,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16
    },
  });