import React, { useState, useEffect, useRef } from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox'
import { useForm } from 'react-hook-form'

export default function Form(){

  useEffect(() => {
    postUser();
  }, [])

    // Variáveis e métodos para CheckBox
    const [checadaSuperior, setChecadaSuperior] = useState(false);
    const [checadaInferior, setChecadaInferior] = useState(false);

    const [username, setUsername]               = useState(String);
    const [email   , setEmail]                  = useState(String);
    const [password, setPassword]               = useState(String);
    const [confirmPassword, setConfirmPassword] = useState(String);
    const [cpf     , setCpf]                    = useState(String);
    const [bornDate, setBornDate]               = useState("");

    const [usernameTrim, setUsernameTrim]               = useState(username.split(" ").join(""));
    const [emailTrim, setEmailTrim]                     = useState(email.split(" ").join(""));
    const [passwordTrim, setPasswordTrim]               = useState(password.split(" ").join(""));
    const [confirmPasswordTrim, setConfirmPasswordTrim] = useState(confirmPassword.split(" ").join(""));
    const [cpfTrim, setCpfTrim]                         = useState(cpf.split(" ").join(""));
    const [bornDateTrim, setBornDateTrim]               = useState("");

    const postUser = async () => {

      if (checadaSuperior == true && checadaInferior == true) {

        if (password == confirmPassword) {

          if (emailTrim                 != "" 
              && usernameTrim           != "" 
              && passwordTrim           != "" 
              && confirmPasswordTrim    != "" 
              && cpfTrim                != "" 
              && bornDateTrim           != ""
              ) {
                await fetch("http://localhost:8090/user",
              {
                method: "POST",
                headers: {
        
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                  {
                  'bornDate' : bornDate,
                  'cpf'      : cpf,
                  "email"    : email,
                  "password" : password,
                  "username" : username
                }
                )
              })
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err=>err)
              } 
              else {
                console.log("Algum dado não foi preenchido");
              }
        
        }
        else {
          console.log("Confirmação de senha não correspondente");
        }
      } 
      else {
        console.log("Alguma das caixas está desmarcada");
      }

      }

    return (
        <View>
            <View>
              <Text style={styles.texto}>Nome de usuário</Text>

              <TextInput
                className="userNamelInput"
                style={styles.input}
                placeholder="Insira seu nome de usuário"
                placeholderTextColor="white" 
                value={username}
                onChangeText={(username) => {
                  setUsername(username);
                  setUsernameTrim(username.split(" ").join(""));
                }}
                />
              
                <Text style={styles.texto}>E-mail</Text>

                <TextInput
                  className="emailInput"
                  style={styles.input}
                  placeholder="Insira seu E-mail"
                  placeholderTextColor="white" 
                  value={email}
                  onChangeText={(email) => {
                    setEmail(email);
                    setEmailTrim(email.split(" ").join(""));
                  }}
                  />

                <Text style={styles.texto}>Senha</Text>

                <TextInput
                  className="passwordInput"
                  style={styles.input}
                  placeholder="Insira sua senha"
                  placeholderTextColor="white" 
                  value={password}
                  onChangeText={(password) => {
                    setPassword(password);
                    setPasswordTrim(password.split(" ").join(""));
                  }}
                  />

                <Text style={styles.texto}>Confirmação de senha</Text>

                <TextInput
                  className="confirmPasswordInput"
                  style={styles.input}
                  placeholder="Confirme sua senha"
                  placeholderTextColor="white" 
                  value={confirmPassword}
                  onChangeText={(confirmPassword) => {
                    setConfirmPassword(confirmPassword);
                    setConfirmPasswordTrim(confirmPassword.split(" ").join(""));
                  }}
                  />

                <Text style={styles.texto}>CPF</Text>

                <TextInput
                  className="cpfInput"
                  style={styles.input}
                  keyboardType="number-pad"
                  placeholder="Insira seu CPF"
                  placeholderTextColor="white" 
                  value={cpf}
                  onChangeText={(cpf) => {
                    setCpf(cpf);
                    setCpfTrim(cpf.split(" ").join(""));
                  }}
                  />

                <Text style={styles.texto}>Data de nascimento</Text>

                <TextInput
                  className="bornInput"
                  style={styles.input}
                  placeholder="Insira sua data de nascimento"
                  placeholderTextColor="white"
                  value={bornDate}
                  onChangeText={(bornDate) => {
                    setBornDate(bornDate);
                    setBornDateTrim(cpf.split(" ").join(""));
                  }}
                  />
                
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

                <TouchableOpacity 
                style={styles.Button}
                onPress={() => postUser()}
                >
                  <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
                  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        color: "white",
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