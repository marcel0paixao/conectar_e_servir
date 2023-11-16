import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox'
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";

export default function Login() {
  const [remember, setRemember] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigation = useNavigation<StackTypes>();

  const login = async () => {
    try {
      await fetch("http://localhost:8000/user/" + email + "/" + password)
      .then((response) => {
        if (response.ok) navigation.navigate('Home');
        else {
          setLoginError('Credenciais inválidas!');
        }
      })
    }
    catch (error) {
      setLoginError('Não foi possível fazer login, verifique sua conexão.');
    }
  }

  return (
    <AppLayout footer>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Entrar</Text>
        </View>
        <View>
          <View>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu E-mail"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={'white'} />
          </View>
          <View>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={'white'} />
          </View>

          <View style={styles.viewCheckBox}>
            <CheckBox
              style={styles.checkboxInputLogin}
              disabled={false}
              value={remember}
              onValueChange={() => setRemember(!remember)}
            />
            <Text style={{...styles.checkboxLabel, marginTop: -15}}>Manter conectado</Text>
          </View>

          {loginError && <Text style={styles.errorMsg}>{loginError}</Text>}

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => login()}
            >
              <Text style={globalStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPass}>Esqueceu sua senha?</Text>

          <View style={styles.separator}></View>

          <View style={styles.loginOptions}>
            <Text style={styles.loginOptionsLabel}>Entre com redes sociais</Text>

            <View style={styles.loginOptionsButtons}>
              <TouchableOpacity style={{ ...styles.socialMediaButton, paddingTop: 6 }} onPress={() => alert('Botão pressionado!')} >
                <Text style={globalStyles.buttonText}>
                  <Image source={require('../../../assets/images/google.png')} width={23} height={23} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.socialMediaButton, paddingBottom: 2 }} onPress={() => alert('Botão pressionado!')} >
                <Image source={require('../../../assets/images/facebook.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <Text onPress={() => navigation.navigate('Signup')} style={styles.loginOptionsLabel}>Não possui conta? <Text style={{ color: 'black', fontWeight: '600' }}>Cadastre-se</Text></Text>
        </View>
      </View>
    </AppLayout>
  );
}

