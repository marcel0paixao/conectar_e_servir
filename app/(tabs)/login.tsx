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
                <Text style={styles.h1}>LOGIN</Text>
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

                <View style={styles.viewCheckBox}>
                  <CheckBox
                    style={styles.CheckBoxInferior}
                    disabled={false}
                    value={checadaInferior}
                    onValueChange={() => setChecadaInferior(!checadaInferior)}
                  />

                  <Text style={styles.viewCheckBoxTextoInferior}>Manter conectado</Text>
                </View>

                <TouchableOpacity style={styles.Button}>
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    h1: {
        textAlign: 'center',
        paddingTop: 100,
        fontSize: 26,
        fontWeight: 'bold'
    },
    texto: {
        paddingTop: 13,
        paddingBottom: 5,
        paddingHorizontal: 10,
        paddingLeft: 30
    },

    textoprimeiro: {
      paddingTop: 100,
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
        paddingLeft: 25,
        marginTop: 10
    },
    viewCheckBoxTextoSuperior: {
        paddingTop: 10
    },
    viewCheckBoxTextoInferior: {
        paddingBottom: 10
    },
    CheckBoxSuperior: {
        margin: 10,
        marginTop: 20,
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