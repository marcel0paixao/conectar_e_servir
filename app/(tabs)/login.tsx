import React, {useState, useEffect} from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox'

export default function Form(){

  useEffect(() => {
    loginUser();
  }, [])

    // Variáveis e métodos para CheckBox
    const [checadaInferior, setChecadaInferior] = React.useState(false);

    const [loginEmail   , setLoginEmail]    = useState(String);
    const [loginPassword, setLoginPassword] = useState(String);

    const [emailTrim, setEmailTrim]                     = useState(loginEmail.split(" ").join(""));
    const [passwordTrim, setPasswordTrim]               = useState(loginPassword.split(" ").join(""));

    const [resultadoConfirmacao, setResultadoConfirmacao] = useState(Boolean);

    const loginUser = async () => {
      if (checadaInferior == true) {

        if (emailTrim != "" && passwordTrim != passwordTrim) {
          try {
            await fetch("http://localhost:8090/user/" + loginEmail + "/" + loginPassword)
            .then((response) => {
              if (response.ok) {
                setResultadoConfirmacao(true);
              }
              else {
                setResultadoConfirmacao(false);
              }
            })
          }
          catch (error) {
            console.log(error)
          }
        } else {
          console.log("Algum dado não foi preenchido");
        }

      } else {
        console.log("Caixa desmarcada");
      }
    }

    return (
        <View>
            <View>
                <Text style={styles.h1}>LOGIN</Text>
                <Text style={styles.textoprimeiro}>E-mail</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Insira seu E-mail"
                  placeholderTextColor="white" 
                  value={loginEmail}
                  onChangeText={(loginEmail) => {
                    setLoginEmail(loginEmail);
                    setEmailTrim(loginEmail.split(" ").join(""));
                  }}
                  />

                <Text style={styles.texto}>Senha</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Insira sua senha"
                  placeholderTextColor="white" 
                  value={loginPassword}
                  onChangeText={(loginPassword) => {
                    setLoginPassword(loginPassword);
                    setPasswordTrim(loginPassword.split(" ").join(""));
                  }}
                  />

                <View style={styles.viewCheckBox}>
                  <CheckBox
                    style={styles.CheckBoxInferior}
                    disabled={false}
                    value={checadaInferior}
                    onValueChange={() => setChecadaInferior(!checadaInferior)}
                  />

                  <Text style={styles.viewCheckBoxTextoInferior}>Manter conectado</Text>
                </View>

                <TouchableOpacity 
                style={styles.Button}
                onPress={() => loginUser()}
                >
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